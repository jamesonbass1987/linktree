import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LinksService } from '../services/links.service';

@Injectable({
  providedIn: 'root'
})
export class LinksResolver implements Resolve<boolean> {


  constructor(private readonly linksService: LinksService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // Todo: load link data from profile name
    return of(true);
  }
}
