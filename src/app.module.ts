import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ReleasesModule } from './releases/releases.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ReleasesModule, ConfigModule.forRoot(), ScheduleModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
