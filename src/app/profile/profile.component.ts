import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';
import { LinkType } from '../core/enums/link-type.enum';
import { LinksService } from '../core/services/links.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  readonly profileName$ = this.route.params.pipe(map(({ handle }: Params) => handle))
  readonly links$ = this.linksService.links$;

  readonly linkType = LinkType;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly linksService: LinksService
  ) { }

  ngOnInit(): void {
  }

}
