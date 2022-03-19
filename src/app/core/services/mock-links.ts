import { LinkType } from "../enums/link-type.enum";
import { MusicPlatformType } from "../enums/music-platform-type.enum";
import { GetLinksForHandleResponse } from "../models/get-links-for-handle-response.model";
import { ClassicLink, MusicLink, ShowsLink } from "../models/link.model";

export const mockLinksResponse: GetLinksForHandleResponse = {
  links: [
    {
      id: 1,
      url: 'www.youtube.com',
      title: 'My Youtube Page',
      type: LinkType.Classic
    } as ClassicLink,
    {
      id: 2,
      url: 'www.facebook.com',
      title: 'My Facebook Page',
      type: LinkType.Classic
    } as ClassicLink,
    {
      id: 3,
      type: LinkType.Shows,
      venues: [
        {
          id: 1,
          url: 'www.songkick.com',
          date: new Date(2019, 3, 1),
          venue: 'The Forum',
          city: 'Melbourne',
          ticketAvailabilty: true,
        },
        {
          id: 1,
          url: 'www.songkick.com',
          date: new Date(2019, 3, 2),
          venue: 'Moda Center',
          city: 'Canberra',
          ticketAvailabilty: false,
        },
        {
          id: 1,
          url: 'www.songkick.com',
          date: new Date(2019, 3, 3),
          venue: 'Operahouse',
          city: 'Sydney',
          ticketAvailabilty: true,
        },
        {
          id: 1,
          url: 'www.songkick.com',
          date: new Date(2019, 3, 4),
          venue: 'Staples Center',
          city: 'Brisbane',
          ticketAvailabilty: true,
        }
      ]
    } as ShowsLink,
    {
      id: 4,
      songLength: 200,
      type: LinkType.Music,
      platforms: [
        {
          id: 1,
          type: MusicPlatformType.Spotify,
          url: 'www.spotify.com'
        },
        {
          id: 2,
          type: MusicPlatformType.AppleMusic,
          url: 'www.applemusic.com'
        },
        {
          id: 3,
          type: MusicPlatformType.Soundcloud,
          url: 'www.soundcloud.com'
        },
        {
          id: 4,
          type: MusicPlatformType.YouTubeMusic,
          url: 'www.youtubemusic.com'
        },
        {
          id: 5,
          type: MusicPlatformType.Deezer,
          url: 'www.deezer.com'
        },
        {
          id: 6,
          type: MusicPlatformType.Tidal,
          url: 'www.tidal.com'
        },
        {
          id: 7,
          type: MusicPlatformType.Bandcamp,
          url: 'www.bandcamp.com'
        },
      ]
    } as MusicLink
  ]
}