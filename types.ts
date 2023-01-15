export interface Sponsor {
  name: string;
  imageURL: string;
  siteURL: string;
  type: SponsorType;
}

export type SponsorType = "current" | "past" | "donator";
