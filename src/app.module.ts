import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ParkingModule } from './parking/parking.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync(databaseConfig),
    AuthModule,
    UserModule,
    ParkingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
