export class CreateReleaseDto {
  release_title: string;
  artist: string;
  details: { country: string; year: number };
  genres: string[];
  formats: string[];
  labels: string[];
  styles: string[];
  uri: string;
  master_id: string;
  thumbnail: string;
  cover_image: string;
}
