import { Body, Controller, Post, Get } from '@nestjs/common';
import { ReleasesService } from './releases.service';
import { Release } from './release.model';

@Controller('releases')
export class ReleasesController {
  constructor(private releasesService: ReleasesService) {}

  @Post()
  createRelease(
    @Body('release_title') release_title: string,
    @Body('artist') artist: string,
    @Body('details') details: { country: string; year: number },
    @Body('genres') genres: string[],
    @Body('formats') formats: string[],
    @Body('labels') labels: string[],
    @Body('styles') styles: string[],
    @Body('uri') uri: string,
    @Body('master_id') master_id: string,
    @Body('thumbnail') thumbnail: string,
    @Body('cover_image') cover_image: string,
  ): Release {
    return this.releasesService.createRelease(
      release_title,
      artist,
      details,
      genres,
      formats,
      labels,
      styles,
      uri,
      master_id,
      thumbnail,
      cover_image,
    );
  }

  @Get()
  getAllReleases() {
    return this.releasesService.getAllReleases();
  }
}
