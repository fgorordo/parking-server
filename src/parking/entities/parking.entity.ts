import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ParkingState, ParkingType } from "../interfaces";
import { User } from "src/user/entities";
import { Locations } from "./locations.entity";

@Entity()
export class Parkings {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('numeric', {nullable: false})
    parkingNumber: number;

    @Column('text', {nullable: false, default: ParkingState.FREE})
    parkingState: ParkingState;

    @Column('text', {nullable: false, default: ParkingType.ROOFED})
    parkingType: ParkingType;

    @Column('text', {nullable: true})
    comments: string;

    @CreateDateColumn({select: false,})
    createdAt: Date;

    @UpdateDateColumn({select: false})
    updatedAt: Date;

    @DeleteDateColumn({select: false})
    deletedAt: Date;

    @ManyToOne(type => User, {nullable: true})
    currentUser: User;

    @ManyToOne(type => Locations, {nullable: false})
    location: Locations;
}
