import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/core/models/link.model';

@Component({
  selector: 'app-classic-link',
  templateUrl: './classic-link.component.html',
  styleUrls: ['./classic-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClassicLinkComponent {

  @Input() link!: Link;

  constructor() { }

  public onLinkClicked(): void {
    window.open(this.link.url)
  }
}
