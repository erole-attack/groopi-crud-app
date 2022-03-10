import { Controller } from '@nestjs/common';
import { ReleasesService } from './releases.service';

@Controller('releases')
export class ReleasesController {
  constructor(private releasesService: ReleasesService) {}
}
