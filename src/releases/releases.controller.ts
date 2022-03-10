import { Body, Controller, Post, Get } from '@nestjs/common';
import { ReleasesService } from './releases.service';
import { Release } from './release.model';
import { CreateReleaseDto } from './dto/create-release.dto';

@Controller('releases')
export class ReleasesController {
  constructor(private releasesService: ReleasesService) {}

  @Post()
  createTask(@Body() createReleaseDto: CreateReleaseDto): Release {
    return this.releasesService.createRelease(createReleaseDto);
  }

  @Get()
  getAllReleases() {
    return this.releasesService.getAllReleases();
  }
}
