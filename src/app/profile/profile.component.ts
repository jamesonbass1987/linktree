import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  readonly profileName$ = this.route.params.pipe(map(({ username }: Params) => username))

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
