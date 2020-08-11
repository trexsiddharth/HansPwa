import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {
  private element: HTMLInputElement;

  constructor(elRef: ElementRef) {
// elRef will get a reference to the element where
    // the directive is placed
this.element = elRef.nativeElement;
console.log(elRef.nativeElement);
  }
  ngOnInit(): void {
    const autocomplete = new google.maps.places.Autocomplete(this.element);
  }
}
