import {
  IsArray,
  IsDataURI,
  IsNotEmpty,
  IsNotEmptyObject,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';

import { ReleaseDetailsDto } from './release-details.dto';
import { Type } from 'class-transformer';

export class CreateReleaseDto {
  @IsNotEmpty()
  @IsString()
  release_title: string;

  @IsNotEmpty()
  @IsString()
  artist: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ReleaseDetailsDto)
  details: ReleaseDetailsDto;

  @IsNotEmpty()
  @IsArray()
  genres: string[];

  @IsNotEmpty()
  @IsArray()
  formats: string[];

  @IsNotEmpty()
  @IsArray()
  labels: string[];

  @IsNotEmpty()
  @IsArray()
  styles: string[];

  @IsNotEmpty()
  @IsDataURI()
  uri: string;

  @IsNotEmpty()
  @IsString()
  master_id: string;

  @IsNotEmpty()
  @IsUrl({ protocols: ['http', 'https'] })
  thumbnail: string;

  @IsNotEmpty()
  @IsUrl({ protocols: ['http', 'https'] })
  cover_image: string;
}
