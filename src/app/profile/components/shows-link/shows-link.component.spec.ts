import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LinkContainerComponent } from '../link-container/link-container.component';

import { ShowsLinkComponent } from './shows-link.component';

import { mockLinksResponse } from '../../../core/services/mock-links'
import { LinkType } from 'src/app/core/enums/link-type.enum';
import { Link, ShowsLink } from 'src/app/core/models/link.model';
import { By } from '@angular/platform-browser';

describe('ShowsLinkComponent', () => {
  let component: ShowsLinkComponent;
  let fixture: ComponentFixture<ShowsLinkComponent>;

  const mockShowsLink = mockLinksResponse.links.find(l => l.type === LinkType.Shows) as ShowsLink;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ShowsLinkComponent,
        LinkContainerComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsLinkComponent);
    component = fixture.componentInstance;
    component.link = mockShowsLink;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Template Tests', () => {
    it('should display the list of shows when a user clicks on the Shows link', fakeAsync(() => {
      const linkEl = fixture.debugElement.query(By.css('.link-main'));
      let showsList = fixture.debugElement.queryAll(By.css('.shows-item'));

      expect(showsList.length).toEqual(0);

      linkEl.nativeElement.click()

      tick();
      fixture.detectChanges();

      showsList = fixture.debugElement.queryAll(By.css('.shows-item'));

      expect(showsList.length).toEqual(mockShowsLink.venues.length)
    }))
  })
});
