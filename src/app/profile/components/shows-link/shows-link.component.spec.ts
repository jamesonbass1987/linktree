import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsLinkComponent } from './shows-link.component';

describe('ShowsLinkComponent', () => {
  let component: ShowsLinkComponent;
  let fixture: ComponentFixture<ShowsLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
