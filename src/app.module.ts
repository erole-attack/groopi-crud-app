import { Module } from '@nestjs/common';
import { ReleasesModule } from './releases/releases.module';

@Module({
  imports: [ReleasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
