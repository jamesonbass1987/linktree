import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformDisplayPipe } from 'src/app/core/pipes/platform-display.pipe';

import { MusicPlayerLinkComponent } from './music-player-link.component';

describe('MusicPlayerLinkComponent', () => {
  let component: MusicPlayerLinkComponent;
  let fixture: ComponentFixture<MusicPlayerLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPlayerLinkComponent, PlatformDisplayPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPlayerLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
