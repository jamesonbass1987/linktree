import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkContainerComponent } from '../link-container/link-container.component';

import { ClassicLinkComponent } from './classic-link.component';

describe('ClassicLinkComponent', () => {
  let component: ClassicLinkComponent;
  let fixture: ComponentFixture<ClassicLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ClassicLinkComponent,
        LinkContainerComponent
      ]
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
