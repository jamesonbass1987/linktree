import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link, MusicLink, Platform } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-music-player-link',
  templateUrl: './music-player-link.component.html',
  styleUrls: ['./music-player-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicPlayerLinkComponent {

  private _link!: Link;
  @Input() set link(link: Link) {
    this._link = link;
    this.platforms = (link as MusicLink).platforms;
  };
  get link(): Link {
    return this._link;
  }

  public platforms: Platform[] = [];

  constructor() {}

  public onPlatformItemClicked(platform: Platform): void {
    window.open(platform.url);
  }
}
