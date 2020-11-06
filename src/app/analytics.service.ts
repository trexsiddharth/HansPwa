import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  googleAnalytics(event) {
    (window as any).ga('send', 'event', event, '', {
      hitCallback: () => {
  
        console.log('Tracking ' + event + ' successful');
  
      }
  
    });
  
    // gtag app + web
    (window as any).gtag('event', event, {
      event_callback: () => {
        console.log('Tracking gtag ' + event + ' successful');
      }
    });
  
  }

  facebookAnalytics(event) {
    (window as any).fbq('track', event, {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('mobile_number'),
    });
    (window as any).fbq('track', '692972151223870' , event, {
      value: localStorage.getItem('id'),
      content_name: localStorage.getItem('mobiler_number'),
    });
  }
}
