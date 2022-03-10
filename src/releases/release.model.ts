export interface Release {
  additon_id: string;
  timestamp: string;
  release_title: string;
  artist: string;
  details: { country: string; year: number };
  genre: string[];
  format: string[];
  label: string[];
  style: string[];
  uri: string;
  master_id: string;
  thumbnail: string;
  cover_image: string;
}
