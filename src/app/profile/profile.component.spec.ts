import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { LinksService } from '../core/services/links.service';

import { ProfileComponent } from './profile.component';

const mockLinksService = {
  links$: of([])
}

const mockActivatedRoute = {
  params: of({handle: 'tommytutone'})
}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [
        RouterTestingModule,
      { provide: ActivatedRoute, useValue: mockActivatedRoute},
      { provide: LinksService, useValue: mockLinksService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
