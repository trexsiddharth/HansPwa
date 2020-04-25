import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { SubscriptionserviceService } from 'src/app/subscriptionservice.service';
import { FindOpenHistoryProfileService } from 'src/app/find-open-history-profile.service';

@Component({
  selector: 'app-today-message',
  templateUrl: './today-message.component.html',
  styleUrls: ['./today-message.component.css']
})
export class TodayMessageComponent implements OnInit {
button;
@Input() messageData;
  constructor(public router: Router,
              private spinner: NgxSpinnerService,
              public itemService: FindOpenHistoryProfileService,
              public subscriptionService: SubscriptionserviceService ) { }

  ngOnInit() {
    this.setMessageText(this.messageData);
  }

     // button 1-> Meri pasand, button-2 -> plan expired, button-3 -> no credits, button-4-> No Compatibilty
    // button-4 -> show more
    setMessageText(text) {
      console.log(text);
      switch (text) {
            case '👉We have already shared 6 profiles with you.\n \n Please come back tomorrow to see more profiles':
            this.button = '1';
            break;
            case 'हम आपको आज के रिश्ते दिखा चुके हैं । कृपया कल यहाँ पुनः पधारे । धन्यवाद्।🙏':
            this.button = '1';
            break;
            case '👉We have already shared 10 profiles with you.\n \n Please come back tomorrow to see more profiles':
            this.button = '1';
            break;
            case 'हम आपको आज के रिश्ते दिखा चुके हैं । कृपया कल यहाँ पुनः पधारे । धन्यवाद्।🙏':
            this.button = '1';
            break;
            case 'Sorry! Your plan has expired. \n\n👉Please renew your plan or contact our customer care for help.':
            this.button = '2';
            break;
            case `माफ़ कीजिये! आपके प्रोफाइल की समय सीमा समाप्त हो गयी है। \n\n👉सुविधाएँ जारी रखने के लिए कृपया पुनः \'प्लान खरीदें\'
             या हमारे कस्टमर केयर पर संपर्क करें।`:
            this.button = '2';
            break;
            case '👉You have 0 contact numbers left. To contact this match, \'Buy A Plan\'':
              this.button = '3';
              break;
              case '👉आपके पास शेष कॉन्टैक्ट नंबर 0 हैं। इन्हें कॉन्टैक्ट करने के लिए \'प्लान खरीदें\'':
              this.button = '3';
              break;
              case ' We are looking for your perfect matches. Come back after 2 days to see more profiles.':
              this.button = '4';
              break;
              case 'हम आपके लिए उत्तम रिश्ते तलाश रहें हैं। कृपया 2 दिनों बाद पुनः यहाँ पधारें।':
              this.button = '4';
              break;
              case 'I am sorry I dont understand.\n \n👉 Please buy a plan or click to see more profiles.':
                this.button = '5';
                break;
                case 'माफ़ कीजिये। मुझे समझ नहीं आया। \n\n👉कृपया \'प्लान खरीदें\' या अगला रिश्ता देखें।':
                this.button = '5';
                break;
        default:
          break;
      }
      console.log(this.button);
      this.spinner.hide();
    }
    callHans() {
      window.open('tel:9697989697');
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
      this.subscriptionService.payNowT(plan, 'live', 0, '', '', localStorage.getItem('mobile_number'));
    }

}
