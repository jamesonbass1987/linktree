import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProfileSettingsService } from '../services/profile-settings.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsResolver implements Resolve<boolean> {

  constructor(private readonly profileSettingsService: ProfileSettingsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Todo: load profile settings from profile name
    return of(true);
  }
}
