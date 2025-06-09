export interface Country {
  code: string
  name: string
  flag: string
}

export interface Competitor {
  name: string
  title: string
  cx: string
}

export interface CountryData {
  competitors: Competitor[]
  lens: Competitor[]
}

export interface CompetitorData {
  [countryCode: string]: CountryData
}