import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserRoles } from '../interfaces';
import { Parkings } from 'src/parking/entities';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {nullable: false, unique: true})
    email: string;

    @Column('text', {nullable: false, select: false})
    password: string

    @Column('text', {nullable: true, select: false})
    rtHash: string;

    @Column('bool',{default: true})
    isActive: boolean;

    @Column('text', {nullable: true})
    phone: string;

    refreshToken?: string;

    @Column('text', {array: true, default: [UserRoles.USER]})
    roles: UserRoles[]

    @CreateDateColumn({select: false,})
    createdAt: Date;

    @UpdateDateColumn({select: false})
    updatedAt: Date;

    @DeleteDateColumn({select: false})
    deletedAt: Date;

    @OneToMany(type => Parkings,(parking) => parking.id)
    parkings: Parkings[]

    @BeforeInsert()
    hashPassword() {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    };

    @BeforeInsert()
    normalizeValues() {
        this.email = this.email.trim().toLowerCase();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.normalizeValues();
    };



}
