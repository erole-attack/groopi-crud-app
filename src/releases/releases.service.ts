import { CreateReleaseDto } from './dto/create-release.dto';
import { Injectable } from '@nestjs/common';
import { Release } from './release.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReleasesService {
  private releases: Release[] = [];

  createRelease(createReleaseDto: CreateReleaseDto): Release {
    const {
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
    } = createReleaseDto;
    const release: Release = {
      additon_id: uuidv4(),
      timestamp: new Date().toISOString(),
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
    };

    this.releases.push(release);
    return release;
  }

  getAllReleases() {
    return this.releases;
  }

  getReleaseById(additon_id: string): Release {
    return this.releases.find((release) => release.additon_id === additon_id);
  }

  deleteRelease(additon_id: string): void {
    this.releases = this.releases.filter(
      (release) => release.additon_id !== additon_id,
    );
  }
}
