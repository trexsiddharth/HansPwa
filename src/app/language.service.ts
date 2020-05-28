import { Injectable } from '@angular/core';
import { Profile } from './compatibility-form/profile';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  currentLanguage = 'hindi';
  profileLang = new Profile();

  constructor() {
   }

  setCurrentLanguage(lang: string) {
    this.currentLanguage = lang ? lang : 'hindi';
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

        break;

        case 'english':
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

        break;

      default:
        break;
    }
  }

}
