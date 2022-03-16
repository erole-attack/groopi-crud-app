import { Details, Release } from './release.model';
import { Injectable, NotFoundException } from '@nestjs/common';

import { AxiosRequestConfig } from 'axios';
import { CreateReleaseDto } from './dto/create-release.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReleasesService {
  private releases: Release[] = [];

  constructor(private httpService: HttpService) {}
  async fetchReleases(): Promise<any> {
    const axiosConfig = (page: number): AxiosRequestConfig => {
      return {
        method: 'get',
        url: `https://api.discogs.com/database/search?year=2020&format=vinyl&type=master&genre=Rock&per_page=100&page=${page}&token=${process.env.DISCOGS_TOKEN}`,
        headers: {
          'Content-Type': 'application/json',
        },
        validateStatus: function (status: number) {
          return status === 200;
        },
      };
    };

    const fetchedReleases = async (page: number) => {
      return firstValueFrom(this.httpService.request(axiosConfig(page)))
        .then((res) => res.data)
        .catch(() => {
          throw new Error('internal communication error');
        });
    };

    const { pagination } = await fetchedReleases(1);
    const { pages } = pagination;

    for (let page = 1; page <= pages; page++) {
      await new Promise((resolve) => setTimeout(resolve, 2400));
      console.log(`fetching page ${page} from ${pages}`);
      const { results } = await fetchedReleases(page);
      results.forEach((release: any) => {
        const {
          country,
          title,
          year,
          genre,
          format,
          label,
          style,
          uri,
          master_id,
          cover_image,
          thumb,
        } = release;
        const details: Details = {
          country: country,
          year: year,
        };
        const release_title = title.split('-')[1].trim();
        const artist = title
          .split('-')[0]
          .replace(/([(0-9)])+/g, '')
          .trim();
        const createReleaseDto: CreateReleaseDto = {
          release_title,
          artist,
          details,
          genres: genre,
          formats: format,
          labels: label,
          styles: style,
          uri,
          master_id,
          thumbnail: thumb,
          cover_image,
        };
        this.createRelease(createReleaseDto);
      });
    }
  }

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
    const found = this.releases.find(
      (release) => release.additon_id === additon_id,
    );

    if (!found) {
      throw new NotFoundException(`Release with ID ${additon_id} not found`);
    }

    return found;
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
    const found = this.getReleaseById(additon_id);
    this.releases = this.releases.filter(
      (release) => release.additon_id !== found.additon_id,
    );
  }
}
