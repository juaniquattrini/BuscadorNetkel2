export interface Country {
  code: string;
  name: string;
  flag: string;
}

export interface Competitor {
  name: string;
  title: string;
  cx: string;
  category?: string;
}

export interface SearchConfig {
  country: string;
  competitor: string;
  query: string;
  cx: string;
}

export interface CompetitorData {
  [countryCode: string]: {
    competitors: Competitor[];
    lens: Competitor[];
  };
}