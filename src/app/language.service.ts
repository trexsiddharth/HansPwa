import { Injectable } from '@angular/core';
import { Profile } from './compatibility-form/profile';
import { HttpClient } from '@angular/common/http';
import { NgxNotificationService } from 'ngx-kc-notification';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLanguage;
   profileLang = new Profile();
  languageChangedFromMainStatus = false;
   homeLang: any = {
     downloadApp : '',
     login : '',
     rishteDekhein: '',
     familyTogether : '',
     freeRegister : '',
     moreThan : '',
     chooseFrom : '',
     manyMatchmakers : '',
     helpingHands: '',
     manyTemple: '',
     verificationCenters: '',
     offlineCentres: '',
     showMore: '',
     shivTemple: '',
     sanatanTemple: '',
     lakshmiTemple: '',
     joinHearts: '',
     matchmakingApp: '',
     getOnPhone: '',
     myprofile: '',
     logout: '',
     subscription: '',
     ourBlog: '',
     vipMatchmaking: '',
     registerFree: ''
   };
   registerLang = {
     freeRegistration: '',
     lookingFor: '',
     firstName: '',
     lastName: '',
     dob: ''
   };

   verificationLang = {
     verifyMobile : '',
     otpSent: '',
     resendOtp: '',
     verify: '',
     changeNumber: ''
   };

  constructor(private http: HttpClient,
              private ngxNotificationService: NgxNotificationService) {
   }

  setCurrentLanguage(lang: string) {
   this.changeLanguage(lang);
  }

  getCurrentLanguage() {
    return localStorage.getItem('language');
  }

  setProfileLanguage() {
    if (localStorage.getItem('language')) {
    switch (localStorage.getItem('language')) {
      case 'hindi':

      // buttons
      this.profileLang.contact = 'कांटेक्ट करें';
      this.profileLang.reject = 'नापसंद है';
      this.profileLang.shortlist = 'पसंद है';

      // top details
      this.profileLang.verifiedAt = 'वेरिफ़िएड एट';
      this.profileLang.managedBy = 'मैनेज्ड बय';
      this.profileLang.hello = 'हेलो';
      this.profileLang.about = 'अबाउट';
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

        // career details
      this.profileLang.occupation = 'ऑक्यूपेशन';
      this.profileLang.designation = 'देसिग्नेशन';
      this.profileLang.annualIncome = 'आय';
      this.profileLang.education = 'क्वालिफिकेशन';
      this.profileLang.college = 'कॉलेज';
      this.profileLang.workingCity = 'वर्किंग सिटी';

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

      // credits
      this.profileLang.credits = 'कांटेक्ट नंबर';

      break;

        case 'english':

          this.profileLang.contact = 'Contact';
          this.profileLang.reject = 'Reject';
          this.profileLang.shortlist = 'Like';

        // top details
          this.profileLang.verifiedAt = 'Verified At';
          this.profileLang.managedBy = 'Managed By';
          this.profileLang.hello = 'Hello';
          this.profileLang.about = 'About';
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
          

         // career details
          this.profileLang.occupation = 'Occupation';
          this.profileLang.designation = 'Designation';
          this.profileLang.annualIncome = 'Annual Income';
          this.profileLang.education = 'Qualification';
          this.profileLang.college = 'College';
          this.profileLang.workingCity = 'Working City';

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

          // credits
          this.profileLang.credits = 'Credits';


          break;

      default:
        break;
    }
  } else {
    localStorage.setItem('language', 'english');
    this.setProfileLanguage();
  }
  }

  setHomeLang(lang) {
    switch (lang) {
      case 'hindi':
        this.homeLang.downloadApp = 'डाउनलोड करें';
        this.homeLang.login = 'लॉगिन करें';
        this.homeLang.rishteDekhein = 'रिश्ते देखें';
        this.homeLang.familyTogether = 'हम परिवारों को जोड़ते है...';
        this.homeLang.freeRegister = 'रजिस्टर करें नि: शुल्क';
        this.homeLang.moreThan = '50,000 से अधिक प्रोफाइल';
        this.homeLang.chooseFrom = 'रिश्तों में से चुनिए अपनी पसंद';
        this.homeLang.manyMatchmakers = '1000+ मैचमेकर्स';
        this.homeLang.helpingHands = 'जो आपको रिश्ते चुनने में मदद करेंगे';
        this.homeLang.manyTemple = '25+ मंदिरो';
        this.homeLang.verificationCenters = 'में वेरिफिकेशन सेंटर्स';
        this.homeLang.offlineCentres = 'ऑफलाइन केन्द्र नेटवर्क';
        this.homeLang.showMore = 'सभी देखें';
        this.homeLang.shivTemple = 'श्री शिव साई धाम मंदिर';
        this.homeLang.sanatanTemple = 'श्री सनातन धर्म मंदिर';
        this.homeLang.lakshmiTemple = 'श्री लक्ष्मी नारायण मंदिर';
        this.homeLang.joinHearts = 'रिश्ते ही नहीं जोड़ें दिलों को भी।';
        this.homeLang.matchmakingApp = 'मैचमेकिंग ऐप';
        this.homeLang.getOnPhone = 'अभी पाये, फ़ोन पर';
        this.homeLang.myprofile = 'मेरी प्रोफाइल';
        this.homeLang.logout = 'लॉगआउट';
        this.homeLang.subscription = 'सब्सक्रिप्शन';
        this.homeLang.ourBlog = 'हमारा ब्लॉग पढ़ें';
        this.homeLang.vipMatchmaking = 'VIP मैच मेकिंग';
        this.homeLang.registerFree = 'रजिस्टर फ्री';
        break;
      case 'english':
        this.homeLang.downloadApp = 'Download App';
        this.homeLang.login = 'Log In';
        this.homeLang.rishteDekhein = 'View Profiles';
        this.homeLang.familyTogether = 'We Bring Families Together...';
        this.homeLang.freeRegister = 'Register For Free';
        this.homeLang.moreThan = 'More Than 50,000 Profiles';
        this.homeLang.chooseFrom = 'To Choose From';
        this.homeLang.manyMatchmakers = '1000+ Matchmakers';
        this.homeLang.helpingHands = 'Who Will Help In Finding A Perfect Match ';
        this.homeLang.manyTemple = '25+ Temples';
        this.homeLang.verificationCenters = 'Verification Centres';
        this.homeLang.offlineCentres = 'Offline Centres Network';
        this.homeLang.showMore = 'Show More';
        this.homeLang.shivTemple = 'Shree Shiv Sai Dham Mandir';
        this.homeLang.sanatanTemple = 'Shree Sanatan Dharam Mandir';
        this.homeLang.lakshmiTemple = 'Shree Lakshmi Narayan Mandir';
        this.homeLang.joinHearts = 'Rishtey Nahi Jode Dilo Ko Bhi';
        this.homeLang.matchmakingApp = 'Matchmaking App';
        this.homeLang.getOnPhone = 'Download On Phone';
        this.homeLang.myprofile = 'My Profile';
        this.homeLang.logout = 'Log Out';
        this.homeLang.subscription = 'Subscription';
        this.homeLang.ourBlog = 'Read Our Blog';
        this.homeLang.vipMatchmaking = 'VIP Matchmaking';
        this.homeLang.registerFree = 'Register Free';
        break;

      default:
        break;
    }
  }

 setRegisterLang() {
   if (localStorage.getItem('language')) {
  switch (localStorage.getItem('language')) {
    case 'hindi':
      this.registerLang.freeRegistration = 'नि: शुल्क रजिस्ट्रेशन';
      this.registerLang.lookingFor = 'मॅट्रिमोनी प्रोफाइल किसके लिए बना रहे हैं';
      this.registerLang.firstName = 'पहला नाम';
      this.registerLang.lastName = 'उपनाम';
      this.registerLang.dob = 'जनम तिथि';
      break;

      case 'english':
        this.registerLang.freeRegistration = 'Free Registration';
        this.registerLang.lookingFor = 'Looking Rishta For';
        this.registerLang.firstName = 'First Name';
        this.registerLang.lastName = 'Last Name';
        this.registerLang.dob = 'Date Of Birth';
        break;

    default:
      break;
  }
} else {
  localStorage.setItem('language', 'hindi');
  this.setRegisterLang();
}
  }

  setVerificationLanguage() {
    if (localStorage.getItem('language')) {
      switch (localStorage.getItem('language')) {
        case 'hindi':
          this.verificationLang.verifyMobile = 'वैरिफाई मोबाइल नंबर';
          this.verificationLang.otpSent = 'OTP भेज दिया गया है';
          this.verificationLang.resendOtp = 'दुबारा भेजें ';
          this.verificationLang.verify = 'वैरिफाई';
          this.verificationLang.changeNumber = 'नंबर बदलें';

          break;

          case 'english':
            this.verificationLang.verifyMobile = 'Verify Mobile Number';
            this.verificationLang.otpSent = 'An OTP has been sent to ';
            this.verificationLang.resendOtp = 'Resend Otp in ';
            this.verificationLang.verify = 'Verify';
            this.verificationLang.changeNumber = 'Change Number';
            break;

        default:
          break;
      }
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
      }, err => {
        console.log(err);
        this.ngxNotificationService.error('something went wrong, Try again later');
      }
    );
  }

}
