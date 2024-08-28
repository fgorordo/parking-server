import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, IsUUID } from "class-validator";
import { ParkingState, ParkingType } from "../interfaces";

export class CreateParkingDto {
    @IsNumber()
    @IsPositive()
    parkingNumber: number;

    @IsString()
    @IsEnum(ParkingType)
    parkingType: ParkingType;

    @IsString()
    @IsUUID()
    location: string;

    @IsString()
    comments?: string;

    @IsOptional()
    @IsEnum(ParkingState)
    parkingState?: ParkingState;

    @IsOptional()
    @IsString()
    @IsUUID()
    currentUser?: string;
}
