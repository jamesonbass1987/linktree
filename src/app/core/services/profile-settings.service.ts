import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { GetProfileSettingsRequest } from '../models/get-profile-settings-request.model';
import { GetProfileSettingsResponse } from '../models/get-profile-settings-response.model';
import { ProfileSettings } from '../models/profile-settings.model';
import { mockSettingsResponse } from './mock-settings';

@Injectable({
  providedIn: 'root'
})
export class ProfileSettingsService {

  private readonly profileSettingsSubject = new BehaviorSubject<ProfileSettings>({});
  readonly profileSettings$ = this.profileSettingsSubject.asObservable();

  constructor() { }

  getProfileSettings(handle: string): Observable<GetProfileSettingsResponse> {
    // In a standard http call, request would be used as part of the api request, but with mock data, leaving unused.
    const request: GetProfileSettingsRequest = {
      handle
    };

    return of(mockSettingsResponse).pipe(
      catchError(() => {
        return of({ settings: {} });
      }),
      tap((resp) => {
        this.profileSettingsSubject.next(resp.settings);
      })
    );
  }
}
