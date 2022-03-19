import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { LinksService } from '../services/links.service';

@Injectable({
  providedIn: 'root'
})
export class LinksResolver implements Resolve<boolean> {


  constructor(private readonly linksService: LinksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const handle: string = route.params['handle'];

    return this.linksService.getLinksForHandle(handle).pipe(
      map(() => true),
      catchError(() => {
        // Todo: Redirect to error page if api call fails
        return of(false);
      }),
    );
  }
}
