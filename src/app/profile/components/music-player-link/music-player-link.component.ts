import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { MusicPlatformType } from 'src/app/core/enums/music-platform-type.enum';
import { Link, MusicLink, Platform } from 'src/app/core/models/link.model';
import { ProfileSettingsService } from 'src/app/core/services/profile-settings.service';
import { platformIconAssetMap } from './music-player-utils';

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
    this.coverArtUrl = (link as MusicLink).coverArtUrl;
  };
  get link(): Link {
    return this._link;
  }

  public platforms: Platform[] = [];
  public coverArtUrl: string = '';

  public readonly iconMap = platformIconAssetMap;

  private readonly selectedPlatformItemSubject = new BehaviorSubject<Platform | undefined>(undefined);
  readonly selectedPlatformItem$ = this.selectedPlatformItemSubject.asObservable();
  private get selectedPlatformItem() {
    return this.selectedPlatformItemSubject.value;
  }

  readonly linkSettings$ = this.settingsService.profileSettings$.pipe(map(({ backgroundColor }) => ({ backgroundColor })))

  constructor(private settingsService: ProfileSettingsService) { }

  public onPlatformItemClicked($event: MouseEvent, platform: Platform, navigateToUrl: boolean): void {
    $event.stopImmediatePropagation();

    if (navigateToUrl) {
      window.open(platform.url);
    } else {
      if (this.selectedPlatformItem !== platform) {
        this.setSelectedPlatformItem(platform);
      } else {
        this.clearSelectedPlatformItem()
      }
    }
  }

  private setSelectedPlatformItem(platform: Platform): void {
    this.selectedPlatformItemSubject.next(platform);
  }

  private clearSelectedPlatformItem(): void {
    this.selectedPlatformItemSubject.next(undefined);
  }
}
