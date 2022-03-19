import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicLinkComponent } from './classic-link.component';

describe('ClassicLinkComponent', () => {
  let component: ClassicLinkComponent;
  let fixture: ComponentFixture<ClassicLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
