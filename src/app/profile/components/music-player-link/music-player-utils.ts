import { MusicPlatformType } from "src/app/core/enums/music-platform-type.enum";



export const platformIconAssetMap: {[key:string]: string} = {
  [MusicPlatformType.AppleMusic]: 'apple-music.svg',
  [MusicPlatformType.Bandcamp]: 'bandcamp.svg',
  [MusicPlatformType.Deezer]: 'deezer.svg',
  [MusicPlatformType.Soundcloud]: 'soundcloud.svg',
  [MusicPlatformType.Spotify]: 'spotify.svg',
  [MusicPlatformType.Tidal]: 'tidal.svg',
  [MusicPlatformType.YouTubeMusic]: 'youtube.svg',
}
