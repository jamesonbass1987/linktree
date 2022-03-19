import { Pipe, PipeTransform } from '@angular/core';
import { MusicPlatformType } from '../enums/music-platform-type.enum';

@Pipe({
  name: 'platformDisplay'
})
export class PlatformDisplayPipe implements PipeTransform {

  transform(value: MusicPlatformType): string {
    let returnValue = value as string;

    switch (value) {
      case MusicPlatformType.AppleMusic: {
        returnValue = 'Apple Music';
        break;
      }
      case MusicPlatformType.Bandcamp: {
        returnValue = 'Bandcamp';
        break;
      }
      case MusicPlatformType.Deezer: {
        returnValue = 'Deezer';
        break;
      }
      case MusicPlatformType.Soundcloud: {
        returnValue = 'Soundcloud';
        break;
      }
      case MusicPlatformType.Spotify: {
        returnValue = 'Spotify';
        break;
      }
      case MusicPlatformType.Tidal: {
        returnValue = 'Tidal';
        break;
      }
      case MusicPlatformType.YouTubeMusic: {
        returnValue = 'YouTube Music'
        break;
      }
    }

    return returnValue;
  }
}
