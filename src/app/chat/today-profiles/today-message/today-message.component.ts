import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ChatServiceService } from 'src/app/chat-service.service';

@Component({
  selector: 'app-today-message',
  templateUrl: './today-message.component.html',
  styleUrls: ['./today-message.component.css']
})
export class TodayMessageComponent implements OnInit, OnDestroy {
  @Input('messageData') messageData: string;
  @Input() button = '0';
  seconds = 60;
  minutes = 59;
  hour = 9;
  month: string[] = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  isMobile = false;
  buttonText = '';
  constructor(public router: Router,
    public itemService: FindOpenHistoryProfileService,
    public subscriptionService: SubscriptionserviceService,
    private deviceService: DeviceDetectorService,
    public chatService: ChatServiceService) {
  }
  ngOnDestroy(): void {
    localStorage.setItem('saveTimer', `${new Date()}`);
  }
  userId;
  userIsLead;
  whatever = false;
  ngOnInit() {
    if (this.messageData.toLowerCase().includes('2')) {
      this.whatever = false;
    }
    else {
      this.whatever = true;
    }
    this.getDifferenceInTime();
    this.isMobile = this.deviceService.isMobile();
    this.chatService.authorized.subscribe(
      data => {
        if (data) {
          this.userId = data.id;
          this.userIsLead = data.isLead;
          console.log(this.userId, this.userIsLead);
        }
      }
    );
    if (Number(localStorage.getItem('profileCompPercent')) < 100) {
      this.buttonText = 'Complete Profile';
    }
    else {
      this.buttonText = 'See More';
    }
  }
  openWhatever() {
    switch (this.buttonText) {
      case 'Complete Profile': this.router.navigateByUrl(`/chat/my-profile-new/${localStorage.getItem('id')}/${localStorage.getItem('is_lead')}`);
        break;
      case 'See More': this.goToDiscover();
        break;
    }
  }
  callHans() {
    window.open('tel:9697989697');
  }
  getMessage() {
    return this.messageData;
  }
  showPlan() {
    this.router.navigateByUrl('subscription');
  }
  showLikedProfile() {
    this.itemService.changeTab(2);
  }
  showProfilesLikedMe() {
    this.itemService.changeTab(3);
  }
  goToVip() {
    this.itemService.changeTab(4);
  }
  buyPlan(plan: any) {
    this.router.navigateByUrl('subscription');
  }

  setTimer() {
    console.log(this.seconds);
    const timer = setInterval(() => {
      this.seconds = this.seconds - 1;
      if (this.hour !== 0 && this.minutes !== 0 && this.seconds === -1) {
        this.seconds = 60;
        this.minutes = this.minutes - 1;
      } else if (this.hour !== 0 && this.minutes === 0 && this.seconds === -1) {
        this.seconds = 60;
        this.minutes = 59;
        this.hour -= 1;
      } else if (this.hour === 0 && this.minutes !== 0 && this.seconds === -1) {
        this.seconds = 60;
        this.minutes -= 1;
      } else if (this.hour === 0 && this.minutes === 0 && this.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  getDifferenceInTime() {
    const todaysDate = new Date().getDate() === 31 ? 1 : new Date().getDate() + 1;
    const todaysMonth = todaysDate === 1 ? new Date().getMonth() + 1 : new Date().getMonth();
    const todaysYear = new Date().getFullYear();
    const nextDay = `${todaysDate} ${this.month[todaysMonth]} ${todaysYear} 00:00:00`;
    console.log(nextDay);
    const date1: any = new Date(nextDay);
    const date2: any = new Date();
    const res = Math.abs(date1 - date2) / 1000;


    // get total days between two dates
    let days = Math.floor(res / 86400);
    console.log('<br>Difference (Days): ' + days);

    // get hours
    let hours = Math.floor(res / 3600) % 24;
    console.log('<br>Difference (Hours): ' + hours);

    // get minutes
    let minute = Math.floor(res / 60) % 60;
    console.log('<br>Difference (Minutes): ' + minute);

    // get seconds
    let second = res % 60;
    console.log('<br>Difference (Seconds): ' + second);

    this.hour = hours;
    this.minutes = minute;
    this.seconds = Math.floor(second);
    this.setTimer();
  }

  goToDiscover() {
    this.itemService.changeTab(0);
  }
}
