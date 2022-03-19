import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  readonly profileName$ = this.route.params.pipe(map(({ handle }: Params) => handle))

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
