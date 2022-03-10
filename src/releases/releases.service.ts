import { Injectable } from '@nestjs/common';
import { Release } from './release.model';

@Injectable()
export class ReleasesService {
  private releases: Release[] = [];
}
