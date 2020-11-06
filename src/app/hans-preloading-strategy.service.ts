import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HansPreloadingStrategyService implements PreloadingStrategy {

  preload(route: Route, fn: Function): Observable<any> {
    console.log
    (`${route.data && route.data.preload ? 'loading module' +  JSON.stringify(route) : `Not Loading ${JSON.stringify(route)}`} `);
    return route.data && route.data.preload ? fn() : of(null);
  }
}
