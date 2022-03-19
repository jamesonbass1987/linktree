import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { ProfileSettingsService } from 'src/app/core/services/profile-settings.service';

@Component({
  selector: 'app-link-container',
  templateUrl: './link-container.component.html',
  styleUrls: ['./link-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LinkContainerComponent {

  @Input() title = '';
  @Input() isExpandable = false;

  @Output() clicked = new EventEmitter<void>();

  readonly linkSettings$ = this.settingsService.profileSettings$.pipe(map(({color, backgroundColor}) => ({ color: undefined, backgroundColor: undefined })))

  private readonly isExpandedSubject = new BehaviorSubject<boolean>(false);
  readonly isExpanded$ = this.isExpandedSubject.asObservable();

  readonly defaultBackgroundColor = '#39E09B';
  readonly defaultColor = '#263238';

  constructor(private settingsService: ProfileSettingsService) { }

  onLinkClick() {
    this.clicked.emit();
  }

}
