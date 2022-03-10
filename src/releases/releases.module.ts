import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ReleasesController } from './releases.controller';
import { ReleasesService } from './releases.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
  ],
  controllers: [ReleasesController],
  providers: [ReleasesService],
})
export class ReleasesModule {}
