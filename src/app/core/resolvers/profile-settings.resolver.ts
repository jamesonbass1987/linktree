import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProfileSettingsService } from '../services/profile-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsResolver implements Resolve<boolean> {

  constructor(private readonly profileSettingsService: ProfileSettingsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const handle: string = route.params['handle'];

    return this.profileSettingsService.getProfileSettings(handle).pipe(
      map(() => true),
      catchError(() => {
        // Todo: Redirect to error page if api call fails
        return of(false);
      }),
    );
  }
}
