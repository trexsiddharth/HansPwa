import { Injectable } from '@angular/core';
import { Profile } from './compatibility-form/profile';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = 'hindi';
  profileLang = new Profile();

  constructor(private http: HttpClient,
              private ngxNotificationService: NgxNotificationService) {
    this.currentLanguage = localStorage.getItem('language').toLowerCase();
   }

  setCurrentLanguage(lang: string) {
   this.changeLanguage(lang);
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  setProfileLanguage() {
    this.profileLang.weight = this.currentLanguage === 'english' ? 'Weight' : 'वेट';
    this.profileLang.martialStatus = this.currentLanguage === 'english' ? 'Marital Status' : 'मैरिटल स्टेटस';
    this.profileLang.foodChoice = this.currentLanguage === 'english' ? 'Food Choice' : 'फ़ूड चॉइस';

    switch (this.currentLanguage) {
      case 'hindi':

      // buttons
      this.profileLang.contact = 'कांटेक्ट करें';
      this.profileLang.reject = 'नापसंद है';
      this.profileLang.shortlist = 'पसंद है';

      // top details
      this.profileLang.verifiedAt = 'वेरिफ़िएड एट:';
      this.profileLang.managedBy = 'प्रोफाइल मैनेज्ड बय:';
      this.profileLang.hello = 'हेलो';
      this.profileLang.personalizedDetails = 'पर्सनल डिटेल्स';
      this.profileLang.careerDetails = 'करियर डिटेल्स';
      this.profileLang.horoscopeDetails = 'होरोस्कोप';
      this.profileLang.familyDetails = 'फॅमिली डिटेल्स';
      this.profileLang.myself = 'माइसेल्फ ';

        // personal details
      this.profileLang.weight = 'वेट';
      this.profileLang.martialStatus = 'मैरिटल स्टेटस';
      this.profileLang.foodChoice = 'फ़ूड चॉइस';
      this.profileLang.religion = 'रिलिजन';
      this.profileLang.workingCity = 'वर्किंग सिटी';

        // career details
      this.profileLang.occupation = 'ऑक्यूपेशन';
      this.profileLang.designation = 'देसिग्नेशन';
      this.profileLang.annualIncome = 'आय';
      this.profileLang.education = 'ग्रेजुएशन';
      this.profileLang.college = 'कॉलेज';

        // horoscope details
      this.profileLang.dob = 'D.O.B';
      this.profileLang.birthTime = 'बर्थ टाइम';
      this.profileLang.birthPlace = 'बर्थ प्लेस';
      this.profileLang.manglik = 'मांगलिक';

        // family details
      this.profileLang.sisters = 'बहनें';
      this.profileLang.brothers = 'भाई';
      this.profileLang.fatherStatus = 'पिता';
      this.profileLang.motherStatus = 'माता';
      this.profileLang.gotra = 'गोत्र';
      this.profileLang.familyType = 'फॅमिली टाइप';
      this.profileLang.houseType = 'हाउस टाइप';
      this.profileLang.familyIncome = 'फॅमिली इनकम';


      // my-profile-nav
      this.profileLang.personal = 'पर्सनल';
      this.profileLang.horoscope = 'होरोस्कोप';
      this.profileLang.family = 'फॅमिली';
      this.profileLang.preference = 'प्रैफरेंसेज';

      // my-profile-menu
      this.profileLang.logout = 'लॉगआउट ';
      this.profileLang.subscription = 'सब्सक्रिप्शन';

      // my-profile
      this.profileLang.myprofile = 'मेरी प्रोफाइल';
      this.profileLang.aboutMe = 'अबाउट मी';
      this.profileLang.name = 'नाम';
      this.profileLang.age = 'उम्र';
      this.profileLang.height = 'उचाई';
      this.profileLang.locality = 'लोकैलिटी';
      this.profileLang.educational = 'शिक्षा';
      this.profileLang.additional = 'एडिशनल';
      this.profileLang.company = 'कंपनी';
      this.profileLang.birthDate = 'जनम तिथि';
      this.profileLang.email = 'ईमेल';
      this.profileLang.mobile = 'मोबाइल';
      this.profileLang.whatsapp = 'व्हाट्सप्प';
      this.profileLang.familyLivingIn = 'फॅमिली लिविंग इन';
      this.profileLang.aboutFamily = 'अबाउट फैमिली';
      this.profileLang.ageMin = 'न्यूनतम उम्र';
      this.profileLang.ageMax = 'अधिकतम उम्र';
      this.profileLang.heightMin = 'न्यूनतम उचाई';
      this.profileLang.heightMax = 'अधिकतम उचाई';
      this.profileLang.incomeMin = 'न्यूनतम आय';
      this.profileLang.incomeMax = 'अधिकतम आय';
      this.profileLang.castePref = 'जाती प्रेफरेंस';
      this.profileLang.manglikPref = 'मांगलिक प्रेफरेंस';
      this.profileLang.foodChoicePref = 'फ़ूड चॉइस प्रेफरेंस';
      this.profileLang.motherTonguePref = 'मात्र भाषा प्रेफरेंस';
      this.profileLang.occupationPref = 'ऑक्यूपेशन प्रेफरेंस';
      this.profileLang.workingPref = 'वर्किंग प्रेफरेंस';
      this.profileLang.desc = 'डिस्क्रिप्शन';

      break;

        case 'english':

          this.profileLang.contact = 'Contact';
          this.profileLang.reject = 'Reject';
          this.profileLang.shortlist = 'Shortlist';

        // top details
          this.profileLang.verifiedAt = 'Verified At:';
          this.profileLang.managedBy = 'Profile Managed By:';
          this.profileLang.hello = 'Hello';
          this.profileLang.personalizedDetails = 'Personal Details';
          this.profileLang.careerDetails = 'Career Details';
          this.profileLang.horoscopeDetails = 'Horoscope';
          this.profileLang.familyDetails = 'Family Details';
          this.profileLang.myself = 'Myself ';

        // personal details
          this.profileLang.weight = 'Weight';
          this.profileLang.martialStatus = 'Marital Status';
          this.profileLang.foodChoice = 'Food Choice';
          this.profileLang.religion = 'Religion';
          this.profileLang.workingCity = 'Working City';

         // career details
          this.profileLang.occupation = 'Occupation';
          this.profileLang.designation = 'Designation';
          this.profileLang.annualIncome = 'Annual Income';
          this.profileLang.education = 'Graduation';
          this.profileLang.college = 'College';

        // horoscope details
          this.profileLang.dob = 'D.O.B';
          this.profileLang.birthTime = 'Birth Time';
          this.profileLang.birthPlace = 'Birth Place';
          this.profileLang.manglik = 'Manglik';

        // family details
          this.profileLang.sisters = 'Sisters';
          this.profileLang.brothers = 'Brothers';
          this.profileLang.fatherStatus = 'Father';
          this.profileLang.motherStatus = 'Mother';
          this.profileLang.gotra = 'Gotra';
          this.profileLang.familyType = 'Family Type';
          this.profileLang.houseType = 'House Type';
          this.profileLang.familyIncome = 'Family Income';

          // my-profile-nav
          this.profileLang.personal = 'Personal';
          this.profileLang.horoscope = 'Horoscope';
          this.profileLang.family = 'Family';
          this.profileLang.preference = 'Preference';

          // my-profile-menu
          this.profileLang.logout = 'Logout ';
          this.profileLang.subscription = 'Subscription';

           // my-profile
          this.profileLang.myprofile = 'My Profile';
          this.profileLang.aboutMe = 'About Me';
          this.profileLang.name = 'Name';
          this.profileLang.age = 'Age';
          this.profileLang.height = 'Height';
          this.profileLang.locality = 'Locality';
          this.profileLang.educational = 'Educational Details';
          this.profileLang.additional = 'Additional';
          this.profileLang.company = 'Company';
          this.profileLang.birthDate = 'Birth Date';
          this.profileLang.email = 'Email';
          this.profileLang.mobile = 'Mobile';
          this.profileLang.whatsapp = 'Whatsapp';
          this.profileLang.familyLivingIn = 'Family Living In';
          this.profileLang.aboutFamily = 'About Family';
          this.profileLang.ageMin = 'Age Min';
          this.profileLang.ageMax = 'Age Max';
          this.profileLang.heightMin = 'Height Min';
          this.profileLang.heightMax = 'Height Max';
          this.profileLang.incomeMin = 'Income Min';
          this.profileLang.incomeMax = 'Income Max';
          this.profileLang.castePref = 'Caste Preference';
          this.profileLang.manglikPref = 'Manglik Preference';
          this.profileLang.foodChoicePref = 'Food Choice Preference';
          this.profileLang.motherTonguePref = 'Mother Tongue Preference';
          this.profileLang.occupationPref = 'Occupation Preference';
          this.profileLang.workingPref = 'Working preference';
          this.profileLang.desc = 'Description';


          break;

      default:
        break;
    }
  }
  changeLanguage(lang: string) {
    console.log('changing language');
    // tslint:disable-next-line: max-line-length
    return this.http.get<any>(' https://partner.hansmatrimony.com/api/language', {params: { ['phone_number'] : localStorage.getItem('mobile_number'), ['language'] : lang}}).subscribe(
      data => {
        console.log(data);
        this.currentLanguage = lang ? lang : 'hindi';
        localStorage.setItem('language', this.currentLanguage);
        this.setProfileLanguage();
        this.ngxNotificationService.success('Language Changed Successfully');
      }, err => {
        console.log(err);
        this.ngxNotificationService.error('something went wrong, Try again later');
      }
    );
  }

}
