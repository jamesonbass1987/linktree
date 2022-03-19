import { LinkType } from "../enums/link-type.enum";
import { MusicPlatformType } from "../enums/music-platform-type.enum";

export interface BaseLink {
    id: number;
    url: string;
    type: LinkType;
}

export interface ClassicLink extends BaseLink {
  title: string;
}

export interface MusicLink extends Omit<BaseLink, 'url'> {
  songLength: number;
  platforms: PlatformLink[];
}

export interface ShowsLink extends Omit<BaseLink, 'url'> {
  venues: VenueLink[]
}

export interface VenueLink extends Omit<BaseLink, 'type'> {
  date: Date;
  venue: string;
  city: string;
  ticketAvailabilty: boolean;
}

export interface PlatformLink extends Omit<BaseLink, 'type'> {
  type: MusicPlatformType;
}


export type Link = ClassicLink | MusicLink | PlatformLink | ShowsLink | VenueLink;
