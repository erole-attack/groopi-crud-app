import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ReleasesModule } from './releases/releases.module';

@Module({
  imports: [ReleasesModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {}
