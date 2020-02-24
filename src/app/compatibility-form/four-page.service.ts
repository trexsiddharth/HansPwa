import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FourPageService {
 formCompleted = new EventEmitter<boolean>();
 form3Completed = new EventEmitter<boolean>();
  constructor() { }
}
