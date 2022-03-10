import { Details, Release } from './release.model';

import { CreateReleaseDto } from './dto/create-release.dto';
import { Injectable } from '@nestjs/common';
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
    const { country, year } = details;
    const releaseDetails: Details = {
      country,
      year,
    };
    const release: Release = {
      additon_id: uuidv4(),
      timestamp: new Date().toISOString(),
      release_title,
      artist,
      details: releaseDetails,
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

  updateRelease(additon_id: string, createReleaseDto: CreateReleaseDto) {
    const release = this.getReleaseById(additon_id);
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

    release_title && (release.release_title = release_title);
    artist && (release.artist = artist);
    details && (release.details = details);
    genres && (release.genres = genres);
    formats && (release.formats = formats);
    labels && (release.labels = labels);
    styles && (release.styles = styles);
    uri && (release.uri = uri);
    master_id && (release.master_id = master_id);
    labels && (release.thumbnail = thumbnail);
    styles && (release.cover_image = cover_image);

    return release;
  }

  deleteRelease(additon_id: string): void {
    this.releases = this.releases.filter(
      (release) => release.additon_id !== additon_id,
    );
  }
}
