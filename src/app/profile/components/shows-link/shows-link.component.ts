import { Component, Input, OnInit } from '@angular/core';
import { Link, ShowsLink, Venue } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-shows-link',
  templateUrl: './shows-link.component.html',
  styleUrls: ['./shows-link.component.scss']
})
export class ShowsLinkComponent implements OnInit {

  private _link!: Link;
  @Input() set link(link: Link) {
    this._link = link;
    this.venues = (link as ShowsLink).venues;
  };

  public venues: Venue[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
