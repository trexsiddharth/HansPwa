import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[eventTracker]'
})
export class AnalyticsButtonDirective {

  @Input('eventTracker') option: any;

  @HostListener('click', ['$event']) onClick($event) {

    (window as any).ga('send', 'event', this.option.category, this.option.action, {
      hitCallback: () => {

        console.log('Tracking is successful');

      }

    });

  }

  constructor() { }

}
