import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ProfileSettingsService } from 'src/app/core/services/profile-settings.service';

@Component({
  selector: 'app-link-container',
  templateUrl: './link-container.component.html',
  styleUrls: ['./link-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // todo: add animation events for expand and collapse of container
  ]
})
export class LinkContainerComponent {

  @Input() title = '';
  @Input() isExpandable = false;

  @Output() clicked = new EventEmitter<void>();

  readonly linkSettings$ = this.settingsService.profileSettings$.pipe(map(({color, backgroundColor}) => ({ color, backgroundColor })))

  private readonly isExpandedSubject = new BehaviorSubject<boolean>(false);
  readonly isExpanded$ = this.isExpandedSubject.asObservable();
  private get isExpanded(): boolean {
    return this.isExpandedSubject.value;
  }

  readonly defaultBackgroundColor = 'rebeccapurple';
  readonly defaultColor = 'palegoldenrod';

  constructor(private settingsService: ProfileSettingsService) { }

  public onLinkClick() {
    if (this.isExpandable) {
      this.setExpandedState(!this.isExpanded);
    }

    this.clicked.emit();
  }

  private setExpandedState(expanded: boolean): void {
    this.isExpandedSubject.next(expanded);
  }
}
