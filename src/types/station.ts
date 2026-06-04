export interface Station {
  stationuuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  tags: string;
  country: string;
  countrycode: string;
  state: string;
  language: string;
  votes: number;
  clickcount: number;
  clicktrend: number;
  codec: string;
  bitrate: number;
  lastcheckok: number;
  geo_lat: number | null;
  geo_long: number | null;
}

export interface Country {
  name: string;
  iso_3166_1: string;
  stationcount: number;
}

export interface Genre {
  name: string;
  stationcount: number;
}
