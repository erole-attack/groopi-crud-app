export interface Release {
  additon_id: string;
  timestamp: string;
  release_title: string;
  artist: string;
  details: Details;
  genres: string[];
  formats: string[];
  labels: string[];
  styles: string[];
  uri: string;
  master_id: string;
  thumbnail: string;
  cover_image: string;
}

export interface Details {
  country: string;
  year: string;
}
