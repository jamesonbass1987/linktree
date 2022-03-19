import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPlayerLinkComponent } from './music-player-link.component';

describe('MusicPlayerLinkComponent', () => {
  let component: MusicPlayerLinkComponent;
  let fixture: ComponentFixture<MusicPlayerLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicPlayerLinkComponent ]
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
