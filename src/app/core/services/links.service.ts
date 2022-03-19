import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { GetLinksForHandleRequest } from '../models/get-links-for-handle-request.model';
import { GetLinksForHandleResponse } from '../models/get-links-for-handle-response.model';
import { Link } from '../models/link.model';

import { mockLinksResponse } from './mock-links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private readonly linksSubject = new BehaviorSubject<Link[] | undefined>(undefined);
  readonly links$ = this.linksSubject.asObservable();

  constructor() { }

  getLinksForHandle(handle: string): Observable<GetLinksForHandleResponse> {
    // In a standard http call, request would be used as part of the api request, but with mock data, leaving unused.
    const request: GetLinksForHandleRequest = {
      handle
    };

    return of(mockLinksResponse).pipe(
      catchError(() => {
        return of({ links: [] });
      }),
      tap((resp) => {
        this.linksSubject.next(resp.links);
      })
    );
  }
}
