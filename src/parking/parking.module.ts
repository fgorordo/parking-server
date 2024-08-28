import { Module } from '@nestjs/common';
import { ParkingService } from './parking.service';
import { ParkingController } from './parking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Locations, Parkings } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Parkings, Locations])],
  controllers: [ParkingController],
  providers: [ParkingService],
})
export class ParkingModule {}
