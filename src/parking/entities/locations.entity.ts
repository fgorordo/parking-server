import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Parkings } from "./parking.entity";

@Entity()
export class Locations {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', {nullable: false})
    name: string;

    @Column('text', {nullable: false})
    address: string;

    @CreateDateColumn({select: false,})
    createdAt: Date;

    @UpdateDateColumn({select: false})
    updatedAt: Date;

    @DeleteDateColumn({select: false})
    deletedAt: Date;

    @OneToMany(() => Parkings, (parking) => parking.id)
    parkings: Parkings[]

}