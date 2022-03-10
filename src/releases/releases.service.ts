import { Injectable } from '@nestjs/common';
import { Release } from './release.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReleasesService {
  private releases: Release[] = [];

  createRelease(
    release_title: string,
    artist: string,
    details: { country: string; year: number },
    genres: string[],
    formats: string[],
    labels: string[],
    styles: string[],
    uri: string,
    master_id: string,
    thumbnail: string,
    cover_image: string,
  ): Release {
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
}
