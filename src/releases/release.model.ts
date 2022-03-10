export interface Release {
  additon_id: string;
  timestamp: string;
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
