import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class ReleaseDetailsDto {
  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsNumberString()
  year: string;
}
