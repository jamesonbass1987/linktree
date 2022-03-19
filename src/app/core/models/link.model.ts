import { LinkType } from "../enums/link-type.enum";
import { MusicPlatformType } from "../enums/music-platform-type.enum";

export interface ClassicLink {
    id: number;
    type: LinkType;
    url?: string;
    title?: string;
}
export interface MusicLink extends ClassicLink  {
  platforms: Platform[];
  songLength: number;
  coverArtUrl: string;
}

export interface ShowsLink extends ClassicLink {
  venues: Venue[]
}

export interface Venue {
  city: string;
  date: Date;
  id: number;
  ticketAvailabilty: boolean;
  url: string;
  venue: string;
}

export interface Platform {
  id: number;
  type: MusicPlatformType;
  url: string;
}


export type Link = ClassicLink | MusicLink | ShowsLink;
