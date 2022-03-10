import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ReleasesService } from './releases.service';
import { Release } from './release.model';
import { CreateReleaseDto } from './dto/create-release.dto';

@Controller('releases')
export class ReleasesController {
  constructor(private releasesService: ReleasesService) {}

  @Post()
  createRelease(@Body() createReleaseDto: CreateReleaseDto): Release {
    return this.releasesService.createRelease(createReleaseDto);
  }

  @Get('/fetch')
  async fetchReleases() {
    return await this.releasesService.fetchReleases();
  }

  @Get()
  getAllReleases() {
    return this.releasesService.getAllReleases();
  }

  @Get('/:additon_id')
  getReleaseById(@Param('additon_id') additon_id: string): Release {
    return this.releasesService.getReleaseById(additon_id);
  }

  @Patch('/:additon_id')
  updateRelease(
    @Param('additon_id') additon_id: string,
    @Body() createReleaseDto: CreateReleaseDto,
  ) {
    return this.releasesService.updateRelease(additon_id, createReleaseDto);
  }

  @Delete('/:additon_id')
  deleteRelease(@Param('additon_id') additon_id: string): void {
    return this.releasesService.deleteRelease(additon_id);
  }
}
