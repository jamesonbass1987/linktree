import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Link, ShowsLink, Venue } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-shows-link',
  templateUrl: './shows-link.component.html',
  styleUrls: ['./shows-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowsLinkComponent {
  private _link!: Link;
  @Input() set link(link: Link) {
    this._link = link;
    this.venues = (link as ShowsLink).venues;
  };
  get link(): Link {
    return this._link;
  }

  public venues: Venue[] = [];

  constructor() { }

  onVenueItemClicked(item: Venue): void {
    window.open(item.url)
  }
}
