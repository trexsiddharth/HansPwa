import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import {
  MatSelect,
  MatSnackBar,
} from "@angular/material";
import { NgxNotificationService } from "ngx-kc-notification";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Router, ActivatedRoute } from "@angular/router";
import { FindOpenHistoryProfileService } from "src/app/find-open-history-profile.service";
import { EditPersonalDialogComponent } from "../myprofile/edit-personal-dialog/edit-personal-dialog.component";
import { EditFamilyDialogComponent } from "../myprofile/edit-family-dialog/edit-family-dialog.component";
import { EditPreferenceDialogComponent } from "../myprofile/edit-preference-dialog/edit-preference-dialog.component";
import { timeout, retry, catchError, startWith, map } from "rxjs/operators";
import { LanguageService } from "src/app/language.service";
import { Options, LabelType } from "ng5-slider";
import { forkJoin, ReplaySubject, Subject, Observable } from "rxjs";
import { take, takeUntil } from "rxjs/operators";
import { ChatServiceService } from 'src/app/chat-service.service';

@Component({
  selector: "app-my-profile-new",
  templateUrl: "./my-profile-new.component.html",
  styleUrls: ["./my-profile-new.component.css"],
})
export class MyProfileNewComponent implements OnInit, OnDestroy, AfterViewInit {
  innerWidth: any;
  public message: string;
  backimagePath;
  imgURL: any;
  BackimgURL;
  suc: any = [];
  minHeight;
  maxHeight;
  carouselSize;
  currentLanguage;
  langCheck;
  userId;
  userIsLead;
  personalProfileData: any;
  familyProfileData: any;
  preferenceProfileData: any;

  selectedTab = 0;
  stepPersonal = -1;
  stepFamily = -1;
  stepPreferences = -1;
  errors = [];

  getcastes: any = [];
  searchedCaste = "";
  searchCaste = new FormControl();
  searchCasteText = new FormControl();
  isAllCastePref = false;
  casteo: Observable<string[]>;
  getcastesPersonal: any = [];

  public filteredCastesMulti: ReplaySubject<string[]> = new ReplaySubject<
    string[]
  >(1);
  protected _onDestroy = new Subject<void>();
  @ViewChild("multiSelect", { static: true }) multiSelect: MatSelect;

  HigherEducation: string[] = ['B.E\/B.Tech', 'B.Pharma', 'M.E\/M.Tech', 'M.Pharma', 'M.S. Engineering', 'B.Arch', 'M.Arch', 'B.Des', 'M.Des', 'MCA\/PGDCA', 'BCA', 'B.IT', 'B.Com', 'CA', 'CS', 'ICWA', 'M.Com', 'CFA',
    'MBA\/PGDM', 'BBA', 'BHM', 'MBBS', 'M.D.', 'BAMS', 'BHMS', 'BDS', 'M.S. (Medicine)', 'MVSc.', 'BvSc.', 'MDS', 'BPT', 'MPT', 'DM', 'MCh',
    // tslint:disable-next-line: max-line-length
    'BL\/LLB', 'ML\/LLM', 'B.A', 'B.Sc.', 'M.A.', 'M.Sc.', 'B.Ed', 'M.Ed', 'MSW', 'BFA', 'MFA', 'BJMC', 'MJMC', 'Ph.D', 'M.Phil', 'Diploma', 'High School', 'Trade School', 'Other'];

  Heights: string[] = [
    "4'0\"",
    "4'1\"",
    "4'2\"",
    "4'3\"",
    "4'4\"",
    "4'5\"",
    "4'6\"",
    "4'7\"",
    "4'8\"",
    "4'9\"",
    "4'10\"",
    "4'11\"",
    "5'0\"",
    "5'1\"",
    "5'2\"",
    "5'3\"",
    "5'4\"",
    "5'5\"",
    "5'6\"",
    "5'7\"",
    "5'8\"",
    "5'9\"",
    "5'10\"",
    "5'11\"",
    "6'0\"",
    "6'1\"",
    "6'2\"",
    "6'3\"",
    "6'4\"",
    "6'5\"",
    "6'6\"",
    "6'7\"",
    "6'8\"",
    "6'9\"",
    "6'10\"",
    "6'11\"",
    "7'0\"",
  ];
  Heights1: string[] = [
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
  ];
  date: string[] = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  month: string[] = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  years: string[] = [
    "1970",
    "1971",
    "1972",
    "1973",
    "1974",
    "1975",
    "1976",
    "1977",
    "1978",
    "1979",
    "1980",
    "1981",
    "1982",
    "1983",
    "1984",
    "1985",
    "1986",
    "1987",
    "1988",
    "1989",
    "1990",
    "1991",
    "1992",
    "1993",
    "1994",
    "1995",
    "1996",
    "1997",
    "1998",
    "1999",
    "2000",
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];
  Occupation: string[] = [
    "Private Job",
    "Business/Self-Employed",
    "Govt Job",
    "Doctor",
    "Teacher",
    "Homely",
    "Not Employed",
  ];
  Mangalika = ["Manglik", "Non-Manglik", "Anshik Manglik", "Doesn't Matter"];
  Religions: string[] = [
    "Hindu",
    "Muslim",
    "Sikh",
    "Christian",
    "Buddhist",
    "Jain",
    "Parsi",
    "Jewish",
    "Bahai",
  ];
  Foodpreferences: string[] = [
    "Doesn't Matter",
    "Non-Vegetarian",
    "Vegetarian",
  ];
  Working: string[] = ["Working", "Not Working", "Doesn't Matter"];
  //Occupation: string[] = ['Private Job', 'Business/Self-Employed', 'Govt Job', 'Doctor', 'Teacher', 'Doesn\'t Matter',
  //'Defence', 'Civil Services'];
  MaritalStatus: string[] = [
    "Doesn't Matter",
    "Never Married",
    "Awaiting Divorce",
    "Divorcee",
    "Widowed",
    "Anulled",
  ];
  designations: string[] = [
    'Owner',
    'Manager',
    'Sales Manager',
    'Accounts Manager',
    'Product Manager',
    'Software Engineer',
    'Engineer',
    'Hotel Management',
    'Operations Manager',
    'Sales Executive',
    'Operations Executive',
    'Accountant',
    'Marketing Manager',
    'Marketing Executive',
    'Chartered Accountant',
    'Owner',
    'Secretary',
    'Company Secretary',
    'Telesales Executive',
    'Teacher',
    'Clerk',
    'Office Assistant',
    'Relationship Manager',
    'Computer Operator',
    'Chief Executive Officer',
    'Chief Marketing Officer',
    'Chief Finance Officer',
    'Business Development',
    'Project Manager',
    'Program Manager',
    'Solution Architect',
    'Graphic Designer',
    'Content Writer',
    'Director',
    'Business Analyst',
    'Front Office',
    'Back office',
    'Counselor',
    'Event Manager',
    'Legal',
    'Public Relations',
    'Others'];
  Status: string[] = ["Alive", "Not Alive"];
  FamilyType: string[] = ["Joint", "Nuclear"];
  Count: any[] = ["None", 0, 1, 2, 3, 4, 5, 6, 7, 8];
  HouseType: string[] = ["Owned", "Rented", "Leased"];

  constructor(
    private spinner: NgxSpinnerService,
    public itemService: FindOpenHistoryProfileService,
    private http: HttpClient,
    public languageService: LanguageService,
    private _formBuilder: FormBuilder,
    private ngxNotificationService: NgxNotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public snackbar: MatSnackBar,
    public chatService: ChatServiceService
  ) {
    this.personalForm = this._formBuilder.group({
      name: [""],
      phone: [
        "",
        Validators.compose([
          Validators.max(9999999999999),
          Validators.pattern("(91)?[6-9][0-9]{9}"),
        ]),
      ],
      Whatsapp: [
        "",
        Validators.compose([
          Validators.max(9999999999999),
          Validators.pattern("(91)?[6-9][0-9]{9}"),
        ]),
      ],
      email: [""],
      birth_date: ["01"],
      birth_month: ["January"],
      birth_year: ["1980"],
      BirthPlace: [""],
      BirthTime: [""],
      Height: [""],
      Weight: [""],
      MaritalStatus: [""],
      AnnualIncome: ["", Validators.compose([Validators.max(999)])],
      Religion: [""],
      Manglik: [""],
      Food: [""],
      Degree: [""],
      Profession: [""],
      OtherProfession: "",
      College: [""],
      Additional: [""],
      Occupation: [""],
      Company: [""],
      Castes: [""],
      WorkingCity: [""],
      Locality: [""],
      About: ["", Validators.compose([Validators.maxLength(300)])],
    });
    this.familyForm1 = this._formBuilder.group({
      identity_number: [""],
      id: [""],
      temple_id: [""],
      family_type: [""],
      house_type: [""],
      about: [""],
      occupation_father: [""],
      occupation_mother: [""],
      father_status: [""],
      mother_status: [""],
      married_sons: [""],
      unmarried_sons: [""],
      married_daughters: [""],
      unmarried_daughters: [""],
      gotra: [""],
      family_income: [""],
      city: [""],
    });
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.languageService.setProfileLanguage();
    this.currentLanguage = localStorage.getItem("language");
    // set already selected language in toggle
    if (localStorage.getItem("language") === "hindi") {
      this.langCheck = false;
    } else {
      this.langCheck = true;
    }

    this.activatedRoute.paramMap.subscribe((routeData: any) => {
      console.log(routeData);
      if (routeData && routeData.params) {
        if (routeData.params.id && routeData.params.isLead) {
          this.userId = routeData.params.id;
          this.userIsLead = routeData.params.isLead;
        }
      }
    });
    this.getUserProfileData();
  }
  ngAfterViewInit() {
    this.setInitialValue();
    // to update the values to doesnt matter if null
    this.setNullToNotMatter();
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();

    // Here the results are saved even if the user does not press the save button
    // const Req1 = this.onSubmitPreferences();
    // const Req2 = this.onSubmitPersonal();
    // const Req3 = this.onSubmitFamily();
    // forkJoin([Req1, Req2, Req3]).subscribe((results) => {
    //   console.log("Here is the result of Fork Join");
    //   console.log(results);
    // });
  }
  protected setInitialValue() {
    this.filteredCastesMulti
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a: string, b: string) =>
          a && b && a === b;
      });
  }
  openPhotoUpload() {
    this.router.navigateByUrl(`chat/my-profile-photo-upload/${this.userId}/${this.userIsLead}`);
  }

  setStepPersonal(index: number) {
    this.stepPersonal = index;
  }
  setStepFamily(index: number) {
    this.stepFamily = index;
  }
  setStepPreferences(index: number) {
    this.stepPreferences = index;
  }

  castePreferences: string[] = [];
  specialCase() {
    this.setStepPreferences(1);
    this.castePreferences = this.preferenceProfileData.caste.split(",");
    console.log(this.preferenceProfileData.caste);
    console.log(this.castePreferences);
  }
  changeSelectedTab(event: any) { }
  optionsFamilyIncome: Options = {
    floor: 0,
    ceil: 100,
    step: 5,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "₹" + value + "LPA";
        case LabelType.High:
          return "₹" + value + " LPA";
        default:
          return "";
      }
    },
  };
  optionsAge: Options = {
    floor: 18,
    ceil: 100,
    step: 1,
    // minRange: 10,
    // maxRange: 15,
    // pushRange: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value + " Yrs";
        case LabelType.High:
          return "" + value + " Yrs";
        default:
          return "";
      }
    },
  };
  optionsHeight: Options = {
    floor: 48,
    ceil: 84,
    step: 1,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + this.Heights[this.Heights1.indexOf(String(value))];
        // return "" + this.Heights[value - 36];
        case LabelType.High:
          return "" + this.Heights[this.Heights1.indexOf(String(value))];
        // return "" + this.Heights[value - 36];
        default:
          return "";
      }
    },
  };
  optionsIncome: Options = {
    floor: 0,
    ceil: 100,
    step: 2,
    // minRange: 10,
    // maxRange: 20,
    // pushRange: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "₹" + value + "LPA";
        case LabelType.High:
          return "₹" + value + " LPA";
        default:
          return "";
      }
    },
  };
  showValue() {
    console.log(
      "this is value of heights of preferenceProfileData" +
      String(this.preferenceProfileData.height_min) +
      String(this.preferenceProfileData.height_max)
    );
  }

  personalForm: FormGroup;
  //familyForm: NgForm;
  familyForm1: FormGroup;
  familyForm: NgForm;
  preferencesForm: NgForm;

  editIndexPersonal = -1;
  editIndexFamily = -1;
  editIndexPrefs = -1;

  panelOpenState = true;
  blockExpansion = 0;

  // isExpansionDisabled(): string {
  //   if (this.blockExpansion) {
  //     return 'disabled-pointer';
  //   }
  //   return '';
  // }

  setEditIndex(index: number) {
    this.editIndexPersonal = index;
    console.log("Personal index set to" + String(index));
  }
  setEditIndexFamily(index: number) {
    this.editIndexFamily = index;
    console.log("Family index set to" + String(index));
  }
  setEditIndexPrefs(index: number) {
    this.editIndexPrefs = index;
    console.log("pref index set to" + String(index));
  }
  setEdit(index) {
    console.log("viaebrnifakujrnviksjsrn");
  }
  setCurrentProfileValue() {
    console.log(this.personalProfileData);
    this.personalForm.patchValue({
      name: this.personalProfileData.name,
      Weight: this.personalProfileData.weight,
      Height: this.Heights[
        this.Heights1.indexOf(this.personalProfileData.height)
      ],
      MaritalStatus: this.personalProfileData.marital_status
        ? this.personalProfileData.marital_status
        : "Never Married",
      Religion: this.familyProfileData.religion
        ? this.familyProfileData.religion
        : "Hindu",
      Manglik: this.personalProfileData.manglik
        ? this.personalProfileData.manglik
        : "Non-Manglik",
      birth_date: this.personalProfileData.birth_date
        ? this.personalProfileData.birth_date.toString().split("-")[2]
        : "",
      birth_month: this.personalProfileData.birth_date
        ? this.getMonthString(
          this.personalProfileData.birth_date.toString().split("-")[1]
        )
        : "",
      birth_year: this.personalProfileData.birth_date
        ? this.years[
        this.years.indexOf(
          this.personalProfileData.birth_date.toString().split("-")[0]
        )
        ]
        : "",
      BirthPlace: this.personalProfileData.birth_place,
      BirthTime: this.personalProfileData.birth_time,
      email: this.familyProfileData.email ? this.familyProfileData.email : "",
      phone: this.familyProfileData.mobile,
      Whatsapp: this.personalProfileData.whats_app_no
        ? this.personalProfileData.whats_app_no
        : this.familyProfileData.mobile,
      Castes: this.familyProfileData.caste,
      Food: this.personalProfileData.food_choice
        ? this.personalProfileData.food_choice
        : "Vegetarian",
      WorkingCity: this.personalProfileData.working_city,
      Locality: this.familyProfileData.locality,
      Degree: this.personalProfileData.degree
        ? this.personalProfileData.degree
        : this.personalProfileData.education,
      Profession: this.personalProfileData.profession,
      College: this.personalProfileData.college,
      Additional: this.personalProfileData.additional_qualification,
      Occupation:
        this.personalProfileData.occupation === "Private Company"
          ? "Private Job"
          : this.personalProfileData.occupation,
      Company: this.personalProfileData.company
        ? this.personalProfileData.company
        : "",
      AnnualIncome: this.getIncome(this.personalProfileData.monthly_income),
      About: this.personalProfileData.about,
    });
  }
  setCurrentFamilyValues() {
    console.log(this.familyProfileData);
    this.familyForm1.patchValue({
      identity_number: this.familyProfileData.identity_number,
      id: this.familyProfileData.id,
      temple_id: this.familyProfileData.temple_id,
      family_type: this.familyProfileData.family_type,
      house_type: this.familyProfileData.house_type,
      about: this.familyProfileData.about,
      occupation_father: this.familyProfileData.occupation,
      occupation_mother: this.familyProfileData.occupation_mother,
      father_status: this.familyProfileData.father_status,
      mother_status: this.familyProfileData.mother_status,
      married_sons: this.familyProfileData.married_sons,
      unmarried_sons: this.familyProfileData.unmarried_sons,
      married_daughters: this.familyProfileData.married_daughters,
      unmarried_daughters: this.familyProfileData.unmarried_daughters,
      gotra: this.familyProfileData.gotra,
      family_income: this.personalProfileData.family_income,
      city: this.familyProfileData.city,
    });
  }
  getMonthString(month: string) {
    switch (month) {
      case "01":
        return "January";
      case "02":
        return "Feburary";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        break;
    }
  }
  onSubmitPersonal() {
    this.editIndexPersonal = -1;
    this.errors = [];
    if (this.personalForm.valid) {
      const date = this.personalForm.value.birth_date;
      const month = this.month.indexOf(this.personalForm.value.birth_month) + 1;
      const year = this.personalForm.value.birth_year;
      console.log(this.personalForm);
      const personalProfileDataForm = new FormData();
      if (this.personalProfileData.identity_number) {
        personalProfileDataForm.append(
          "identity_number",
          this.personalProfileData.identity_number
        );
      } else {
        personalProfileDataForm.append("id", this.personalProfileData.id);
      }
      personalProfileDataForm.append(
        "temple_id",
        this.personalProfileData.temple_id
      );
      personalProfileDataForm.append(
        "about",
        this.personalForm.value.About
          ? this.personalForm.value.About
          : this.personalProfileData.about
      );
      personalProfileDataForm.append(
        "name",
        this.personalForm.value.name
          ? this.personalForm.value.name
          : this.personalProfileData.name
      );
      personalProfileDataForm.append(
        "birth_date",
        year + "-" + month + "-" + date
          ? year + "-" + month + "-" + date
          : this.personalProfileData.birth_date
      );
      personalProfileDataForm.append(
        "birth_place",
        this.personalForm.value.BirthPlace
          ? this.personalForm.value.BirthPlace
          : this.personalProfileData.birth_place
      );
      personalProfileDataForm.append(
        "birth_time",
        this.personalForm.value.BirthTime
          ? this.personalForm.value.BirthTime
          : this.personalProfileData.birth_time
      );
      personalProfileDataForm.append(
        "marital_status",
        this.personalForm.value.MaritalStatus
          ? this.personalForm.value.MaritalStatus
          : this.personalProfileData.marital_status
      );
      personalProfileDataForm.append(
        "manglik",
        this.personalForm.value.Manglik
          ? this.personalForm.value.Manglik
          : this.personalProfileData.manglik
      );
      personalProfileDataForm.append(
        "religion",
        this.personalForm.value.Religion
          ? this.personalForm.value.Religion
          : this.familyProfileData.religion
      );
      personalProfileDataForm.append(
        "height",
        this.Heights1[this.Heights.indexOf(this.personalForm.value.Height)]
          ? this.Heights1[this.Heights.indexOf(this.personalForm.value.Height)]
          : this.personalProfileData.height
      );
      personalProfileDataForm.append(
        "weight",
        this.personalForm.value.Weight
          ? this.personalForm.value.Weight
          : this.personalProfileData.weight
      );
      personalProfileDataForm.append(
        "food_choice",
        this.personalForm.value.Food
          ? this.personalForm.value.Food
          : this.personalProfileData.food_choice
      );
      personalProfileDataForm.append(
        "caste",
        this.personalForm.value.Castes
          ? this.personalForm.value.Castes
          : this.familyProfileData.caste
      );
      personalProfileDataForm.append(
        "locality",
        this.personalForm.value.Locality
          ? this.personalForm.value.Locality
          : this.familyProfileData.locality
      );
      personalProfileDataForm.append(
        "working_city",
        this.personalForm.value.WorkingCity
          ? this.personalForm.value.WorkingCity
          : this.personalProfileData.working_city
      );
      personalProfileDataForm.append(
        "degree",
        this.personalForm.value.Degree
          ? this.personalForm.value.Degree
          : this.personalProfileData.degree
      );
      personalProfileDataForm.append(
        "college",
        this.personalForm.value.College
          ? this.personalForm.value.College
          : this.personalProfileData.college
      );
      personalProfileDataForm.append(
        "occupation",
        this.personalForm.value.Occupation
          ? this.personalForm.value.Occupation
          : this.personalProfileData.occupation
      );
      personalProfileDataForm.append(
        "annual_income",
        this.personalForm.value.AnnualIncome
          ? this.personalForm.value.AnnualIncome
          : this.personalProfileData.monthly_income
      );

      personalProfileDataForm.append(
        "additional_qualification",
        this.personalForm.value.Additional
          ? this.personalForm.value.Additional
          : this.personalProfileData.additional_qualification
      );

      personalProfileDataForm.append(
        "company",
        this.personalForm.value.Company
          ? this.personalForm.value.Company
          : this.personalProfileData.company
      );
      personalProfileDataForm.append(
        "address",
        this.personalForm.value.WorkingCity
          ? this.personalForm.value.WorkingCity
          : this.personalProfileData.working_city
      );
      personalProfileDataForm.append(
        "email",
        this.personalForm.value.email
          ? this.personalForm.value.email
          : this.personalProfileData.email
      );
      personalProfileDataForm.append(
        "mobile",
        this.personalForm.value.phone
          ? this.personalForm.value.phone
          : this.familyProfileData.phone
      );
      personalProfileDataForm.append(
        "whatsapp",
        this.personalForm.value.Whatsapp
          ? this.personalForm.value.Whatsapp
          : this.familyProfileData.mobile
      );
      personalProfileDataForm.append(
        "profession",
        this.personalForm.value.Profession !== "Others"
          ? this.personalForm.value.Profession
          : this.personalForm.value.OtherProfession
            ? this.personalForm.value.OtherProfession
            : this.personalProfileData.profession
      );
      personalProfileDataForm.append(
        "education",
        this.personalForm.value.Degree
          ? this.personalForm.value.Degree
          : this.personalProfileData.degree
      );
      personalProfileDataForm.append(
        "is_lead",
        localStorage.getItem("is_lead")
      );
      console.log(personalProfileDataForm);
      this.http
        .post(
          "https://partner.hansmatrimony.com/api/updatePersonalDetails",
          personalProfileDataForm
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            this.getUserProfileData();
          },
          (error: any) => {
            console.log(error);
            this.ngxNotificationService.error(
              "Something Went Wrong, Try Again Later"
            );
          }
        );
    } else {
      for (const control in this.personalForm.controls) {
        console.log(this.personalForm.controls[control].value);
        if (!this.personalForm.controls[control].valid) {
          this.errors.push(control);
        }
      }
      if (this.errors[0]) {
        this.ngxNotificationService.error(
          "Fill the " + this.errors[0] + " detail"
        );
      }
    }
  }
  onSubmitFamily() {
    this.editIndexFamily = -1;
    console.log("family Data to update");
    console.log(this.familyProfileData);
    const newFamilyForm = new FormData();
    newFamilyForm.append(
      "identity_number",
      this.familyProfileData.identity_number
    );
    newFamilyForm.append("id", this.familyProfileData.id);
    newFamilyForm.append("temple_id", this.familyProfileData.temple_id);
    newFamilyForm.append("family_type", this.familyProfileData.family_type);
    newFamilyForm.append("house_type", this.familyProfileData.house_type);
    newFamilyForm.append("about", this.familyProfileData.about);
    newFamilyForm.append(
      "occupation_father",
      this.familyProfileData.occupation
    );
    newFamilyForm.append(
      "occupation_mother",
      this.familyProfileData.occupation_mother
    );
    newFamilyForm.append("father_status", this.familyProfileData.father_status);
    newFamilyForm.append("mother_status", this.familyProfileData.mother_status);
    newFamilyForm.append("married_sons", this.familyProfileData.married_sons);
    newFamilyForm.append(
      "unmarried_sons",
      this.familyProfileData.unmarried_sons
    );
    newFamilyForm.append(
      "married_daughters",
      this.familyProfileData.married_daughters
    );
    newFamilyForm.append(
      "unmarried_daughters",
      this.familyProfileData.unmarried_daughters
    );
    newFamilyForm.append("gotra", this.familyProfileData.gotra);
    newFamilyForm.append("family_income", this.familyProfileData.family_income); //income is updated here.
    newFamilyForm.append("city", this.familyProfileData.city);
    newFamilyForm.append("is_lead", localStorage.getItem("is_lead"));

    this.http
      .post(
        "https://partner.hansmatrimony.com/api/updateFamilyDetails",
        newFamilyForm
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.getUserProfileData();
          console.log("Family Deatils Updated successfully");
        },
        (error: any) => {
          console.log(error);
          this.ngxNotificationService.error(
            "Something Went Wrong, Try Again Later"
          );
        }
      );
  }
  onSubmitPreferences() {
    this.editIndexPrefs = -1;
    this.preferenceProfileData.religion = this.preferenceProfileData.religion.join(",");
    this.preferenceProfileData.caste = this.castePreferences.join(",");
    console.log("preference Data to update");

    console.log(this.preferenceProfileData);

    const newPrefForm = new FormData();
    newPrefForm.append(
      "identity_number",
      this.preferenceProfileData.identity_number
    );
    newPrefForm.append("temple_id", this.preferenceProfileData.temple_id);
    newPrefForm.append("id", this.preferenceProfileData.id);
    newPrefForm.append("caste", this.searchCaste.value);
    newPrefForm.append("manglik", this.preferenceProfileData.manglik);
    newPrefForm.append(
      "marital_status",
      (this.preferenceProfileData.marital_status == "undefined" || this.preferenceProfileData.marital_status) === undefined ?
        "Doesn't Matter" : this.preferenceProfileData.marital_status
    );
    if (this.personalProfileData.gender === "Male") {
      newPrefForm.append("working", this.preferenceProfileData.working);
      newPrefForm.append("occupation", "na");
    } else {
      newPrefForm.append("occupation", this.preferenceProfileData.occupation);
      newPrefForm.append("working", "na");
    }
    newPrefForm.append("food_choice", this.preferenceProfileData.food_choice);
    newPrefForm.append("description", this.preferenceProfileData.description);
    newPrefForm.append("income_min", this.preferenceProfileData.income_min);
    newPrefForm.append("income_max", this.preferenceProfileData.income_max);
    newPrefForm.append("height_min", this.preferenceProfileData.height_min);
    newPrefForm.append("height_max", this.preferenceProfileData.height_max);
    newPrefForm.append("age_min", this.preferenceProfileData.age_min);
    newPrefForm.append("age_max", this.preferenceProfileData.age_max);
    newPrefForm.append(
      "mother_tongue",
      this.preferenceProfileData.mother_tongue
    );
    newPrefForm.append("is_lead", localStorage.getItem("is_lead"));
    this.http
      .post(
        "https://partner.hansmatrimony.com/api/updatePreferencesDetails",
        newPrefForm
      )
      .subscribe(
        (data: any) => {
          console.log(data);
          console.log("Preference Details updated successfully");
        },
        (error: any) => {
          console.log(error);
          this.ngxNotificationService.error(
            "Something Went Wrong, Try Again Later"
          );
        }
      );
  }
  langChanged(event) {
    console.log(event.checked);
    if (event.checked) {
      localStorage.setItem("language", "english");
      this.languageService.setCurrentLanguage("english");
    } else {
      localStorage.setItem("language", "hindi");
      this.languageService.setCurrentLanguage("hindi");
    }
  }
  openSubscription() {
    this.router.navigateByUrl("subscription");
  }
  setAge(dob: string) {
    if (dob != null) {
      return Math.floor(
        (Date.now() - new Date(dob).getTime()) / (1000 * 60 * 60 * 24 * 365)
      );
    } else {
      return null;
    }
  }
  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  getHeight(num: string) {
    return this.Heights[this.Heights1.indexOf(num)];
  }
  getProfilesPhoto(
    num: string,
    num2: string,
    gen: string,
    index: string
  ): String {
    if (num !== "[]" && num && num !== "null") {
      const carousel: any = JSON.parse(num);
      if (carousel[index]) {
        return (
          "http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/" +
          carousel[index]
        );
      } else {
        return "../../assets/empty_profile.jpeg";
      }
    } else if (num2) {
      return "http://hansmatrimony.s3.ap-south-1.amazonaws.com/uploads/" + num2;
    } else {
      if (gen === "Male") {
        return "../../assets/male_pic.png";
      } else {
        return "../../assets/female_pic.png";
      }
    }
  }
  onProfileLoadError(gen: string, index) {
    console.log("error occured while loading image, Setting default image");
    const image = document.querySelectorAll("#imgProfile")[index - 1];
    if (gen === "Male") {
      image.setAttribute("src", "../../assets/male_pic.png");
    } else {
      image.setAttribute("src", "../../assets/female_pic.png");
    }
  }

  previewBack(files, index) {
    console.log(index);
    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }
      const reader = new FileReader();
      this.backimagePath = files[0];
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.BackimgURL = reader.result;
        this.uploadPhoto(this.backimagePath, index);
      };
    }
  }

  getUserProfileData() {
    if (this.userId || localStorage.getItem("id")) {
      this.spinner.show();
      const myprofileData = new FormData();
      myprofileData.append(
        "id",
        this.userId ? this.userId : localStorage.getItem("id")
      );
      myprofileData.append("contacted", "1");
      myprofileData.append(
        "is_lead",
        this.userIsLead ? this.userIsLead : localStorage.getItem("is_lead")
      );
      // tslint:disable-next-line: max-line-length
      return this.http
        .post<any>(
          "https://partner.hansmatrimony.com/api/getProfile",
          myprofileData
        )
        .pipe(
          timeout(7000),
          retry(2),
          catchError((e) => {
            this.ngxNotificationService.error(
              "Server Time Out, Try Again Later"
            );
            throw new Error("Server Timeout " + e);
          })
        )
        .subscribe(
          (data: any) => {
            console.log(data);
            this.personalProfileData = data.profile ? data.profile : null;
            this.familyProfileData = data.family ? data.family : null;
            this.preferenceProfileData = data.preferences
              ? data.preferences
              : null;
            this.spinner.hide();
            if (this.getCarouselCount() != 1) {
              console.log("Photo status set to true");
              this.itemService.setPhotoStatus(true);
            }
            this.getAllCaste();
            this.getAllCastePersonal();
            this.setCurrentProfileValue();
            this.setCurrentFamilyValues();
            this.preferenceProfileData.religion = this.preferenceProfileData.religion.split(',');
          },
          (error: any) => {
            this.spinner.hide();
            console.log(error);
            this.ngxNotificationService.error("Something Went Wrong");
          }
        );
    } else {
      this.ngxNotificationService.error("No user found");
    }
  }
  changeProfileImageNew() {
    document.querySelector<HTMLInputElement>('#backfileNew').click();
  }
  chooseFileForUploadNew(files) {
    if (files.length === 0) {
      return;
    } else {
      const mimeType = files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        alert('Only images are supported.');
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        // use backimgurl to set image
        // this.BackimgURL = reader.result;
        this.uploadPhotoNew(files[0]);
      };
    }
  }
  uploadPhotoNew(data) {
    this.spinner.show();
    const uploadData = new FormData();
    uploadData.append('id', localStorage.getItem('id'));
    uploadData.append('index', '1');
    uploadData.append('image', data);
    uploadData.append('is_lead', localStorage.getItem('is_lead'));

    return this.http.post('https://partner.hansmatrimony.com/api/' + 'uploadProfilePicture', uploadData).subscribe((suc: any) => {
      console.log('photos', suc);
      if (suc.pic_upload_status === 'Y') {
        this.spinner.hide();
        console.log("Image Upload successful");
        this.ngxNotificationService.success("Photo Uploaded Succesfully!");
        this.itemService.setPhotoStatus(true);
      } else {
        this.ngxNotificationService.error("Photo Upload Unsuccessful!");
        this.spinner.hide();
      }
    }, err => {
      this.ngxNotificationService.error("Photo could not be Uploaded!Try after some time");
      console.log(err);
      this.spinner.hide();
    });
  }
  uploadPhoto(data, index) {
    this.spinner.show();
    const uploadData = new FormData();
    uploadData.append("id", localStorage.getItem("id"));
    uploadData.append("index", index);
    uploadData.append("image", data);
    uploadData.append("is_lead", localStorage.getItem("is_lead"));

    return this.http
      .post(
        "https://partner.hansmatrimony.com/api/" + "uploadProfilePicture",
        uploadData
      )
      .subscribe(
        (suc) => {
          this.suc = suc;
          console.log("photos", suc);
          if (this.suc.pic_upload_status === "Y") {
            this.spinner.hide();
            document
              .querySelectorAll("#imgProfile")
            [index - 1].setAttribute("src", this.BackimgURL);
            this.ngxNotificationService.success("Photo Uploaded Succesfully!");
          } else {
            this.spinner.hide();
            this.ngxNotificationService.error("Photo Upload Unsuccesful!");
          }
        },
        (err) => {
          this.ngxNotificationService.error("Photo could not be Uploaded!");
          // console.log(err);
          console.log(err);
        }
      );
  }
  getMotherTongue(value: string) {
    if (!value) {
      return "Hindi-Delhi";
    } else {
      return value;
    }
  }
  getOfficeAddress(value1: string, value2: string) {
    if (value1) {
      return value1;
    } else if (value2) {
      return value2;
    } else {
      return "N/A";
    }
  }

  getImagesCount() {
    if (!this.carouselSize) {
      this.carouselSize = [];
      let num = this.personalProfileData.carousel;
      if (num !== "[]" && num && num !== "null") {
        const carousel: object = JSON.parse(num);
        if (carousel) {
          Object.keys(carousel).forEach((element) => {
            this.carouselSize.push(element);
          });
          return this.carouselSize;
        }
      } else {
        this.carouselSize = [1];
        return this.carouselSize;
      }
    } else {
      return this.carouselSize;
    }
  }

  getCarouselCount() {
    let num = this.personalProfileData.carousel;
    if (num !== "[]" && num && num !== "null") {
      const carousel: object = JSON.parse(num);
      if (carousel) {
        let size = Object.keys(carousel);
        console.log(size.length);
        return size.length;
      }
    } else {
      return 1;
    }
  }

  changeProfileImage(index: string) {
    const i = Number(index) + 1;
    console.log("current index is " + i);
    document.querySelectorAll("#backfile")[index].click();
  }
  addProfileImage(index: number) {
    const i = index + 1;
    console.log("current index is " + i);
    this.carouselSize.push(i);
    setTimeout(() => {
      document.querySelectorAll("#backfile")[index.toString()].click();
    }, 1000);
  }

  getIncome(value: number) {
    if (value != null) {
      if (value.toString().length >= 6) {
        return String(Number(value) / 100000);
      } else if (value.toString().length >= 5) {
        return String((Number(value) / 10000) * 12);
      } else {
        return value;
      }
    } else {
      return "";
    }
  }
  logout() {
    let lang = localStorage.getItem("language");
    localStorage.clear();
    localStorage.setItem("language", lang);
    this.router.navigateByUrl("/home");
  }
  backToChat() {
    // this.backToProfiles.emit('chatbot');
    this.router.navigateByUrl("/chat");
  }
  setLocality(locality, city) {
    if (locality && locality !== "") {
      return locality;
    } else {
      return city;
    }
  }
  downloadMyProfile() {
    const pdfData = new FormData();
    pdfData.append("id", localStorage.getItem("id"));
    pdfData.append("profile_to_send_id", localStorage.getItem("id"));
    pdfData.append("full", "1");
    pdfData.append("is_lead", localStorage.getItem("is_lead"));

    return this.http
      .post<any>("https://partner.hansmatrimony.com/api/downloadPdf", pdfData)
      .subscribe(
        (data) => {
          console.log(data);
          if (data.status === 1) {
            const downloadLink = document.querySelectorAll<HTMLElement>(
              "#downLink"
            );
            this.spinner.hide();
            this.ngxNotificationService.info("Downloading your file");
            if (data.url) {
              window.open(data.url);
            }
          }
        },
        (err) => {
          console.log(err);
          this.ngxNotificationService.error("Error Occured");
        }
      );
  }
  getQualification(degree, education) {
    return education != null && education !== "" ? education : degree;
  }

  setMarriageBrothers(value1: any, value2: any) {
    if (value1 != null && value1 !== "" && value1 !== 0) {
      if (value2 != null && value2 !== "" && value2 !== 0) {
        return (
          String(Number(value1) + Number(value2)) + "| " + value1 + " Married"
        );
      } else {
        return String(Number(value1) + Number(value2)) + "Brothers";
      }
    } else {
      if (value2 != null && value2 !== "" && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + "Brothers";
      } else {
        return "0 Brothers";
      }
    }
  }

  setMarriageSisters(value1: any, value2: any) {
    if (value1 != null && value1 !== "" && value1 !== 0) {
      if (value2 != null && value2 !== "" && value2 !== 0) {
        return (
          String(Number(value1) + Number(value2)) + "| " + value1 + " Married"
        );
      } else {
        return String(Number(value1) + Number(value2)) + "Sisters";
      }
    } else {
      if (value2 != null && value2 !== "" && value2 !== 0) {
        return String(Number(value1) + Number(value2)) + "Sisters";
      } else {
        return "0 Sisters";
      }
    }
  }
  getAllCaste() {
    this.http
      .get("https://partner.hansmatrimony.com/api/getAllCaste")
      .subscribe((res: any) => {
        this.getcastes = res;
        // adittion of all to the list of castes
        this.getcastes.push("All");

        // set initial selection
        if (
          this.preferenceProfileData.caste &&
          this.preferenceProfileData.caste !== "null"
        ) {
          let values = [];
          this.preferenceProfileData.caste.split(",").forEach((element) => {
            console.log(element);
            if (this.getcastes.indexOf(element)) {
              values.push(this.getcastes[this.getcastes.indexOf(element)]);
            }
          });
          // if all , check the check box for no caste bar
          if (values.includes("All")) {
            this.isAllCastePref = true;
          }
          this.searchCaste.setValue(values);
        }

        // load the initial bank list
        this.filteredCastesMulti.next(this.getcastes.slice());

        // listen for search field value changes
        this.searchCasteText.valueChanges
          .pipe(takeUntil(this._onDestroy))
          .subscribe(() => {
            this.filterCasteMulti();
          });
      });
  }
  setNullToNotMatter() {
    setTimeout(() => {
      if (this.preferenceProfileData) {
        console.log("working");
        if (!this.preferenceProfileData.manglik) {
          this.preferenceProfileData.manglik = "Doesn't Matter";
        }
        if (!this.preferenceProfileData.working) {
          this.preferenceProfileData.working = "Doesn't Matter";
        }
        if (!this.preferenceProfileData.marital_status) {
          this.preferenceProfileData.marital_status = "Doesn't Matter";
        }
        if (!this.preferenceProfileData.mother_tongue) {
          this.preferenceProfileData.mother_tongue = "Hindi";
        }
        if (!this.preferenceProfileData.food_choice) {
          this.preferenceProfileData.food_choice = "Doesn't Matter";
        }
        if (!this.preferenceProfileData.occupation) {
          this.preferenceProfileData.occupation = "Doesn't Matter";
        }
      }
    }, 1000);
  }
  protected filterCasteMulti() {
    if (!this.getcastes) {
      return;
    }
    // get the search keyword
    let search = this.searchCasteText.value;
    if (!search) {
      this.filteredCastesMulti.next(this.getcastes.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredCastesMulti.next(
      this.getcastes.filter((bank) => bank.toLowerCase().indexOf(search) > -1)
    );
  }

  LifeStatus(person: string, work: string) {
    if (person != null && person !== "") {
      if (person === "Alive") {
        if (work) {
          return "Alive | " + work;
        } else {
          return "Alive";
        }
      } else {
        return "Not Alive";
      }
    } else {
      if (work) {
        return work;
      } else {
        return "";
      }
    }
  }
  checkAllCastePref(event) {
    console.log(event);
    if (event.checked) {
      this.searchCaste.setValue(["All"]);
    } else {
      this.searchCaste.setValue([""]);
    }
  }
  prevEventLength: number = 0;
  casteSelectionChanged(event) {
    console.log(event);
    if (event.value.length > this.prevEventLength) {
      this.showSnackBar(`Added Successfully`, "");
      this.searchCasteText.setValue("");
    }
    else if (event.value.length < this.prevEventLength) {
      this.showSnackBar(` Removed Successfully`, "");
    }
    this.prevEventLength = event.value.length;
  }
  showSnackBar(msg: string, action: string) {
    this.snackbar.open(msg, action, {
      duration: 2000,
    });
  }

  navigateTo(id: string) {
    console.log(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  getAllCastePersonal() {
    this.http.get('https://partner.hansmatrimony.com/api/getAllCaste').subscribe((res: any) => {
      this.getcastesPersonal = res;
    });
    if (this.personalForm.get('Castes').value && this.personalForm.get('Castes').value !== '') {
      this.casteo = this.personalForm.get('Castes').valueChanges.pipe(
        startWith(''),
        map(value => this._Castefilter(value))
      );
    } else {
      this.personalForm.patchValue({
        Castes: ''
      });
      this.casteo = this.personalForm.get('Castes').valueChanges.pipe(
        startWith(''),
        map(value => this._Castefilter(value))
      );
    }
  }

  private _Castefilter(value: string): string[] {
    if (value != null) {
      const filterValue = value.toLowerCase();
      return this.getcastesPersonal.filter(option => option.toLowerCase().includes(filterValue));
    } else {
      const filterValue = 'arora';
      return this.getcastesPersonal.filter(option => option.toLowerCase().includes(filterValue));
    }
  }

  async casteValidation(value) {
    console.log('caste changed', value);
    const status = 1;
    let statusConfirmed;
    await this.checkCaste(value).then((res: boolean) => {
      statusConfirmed = res;
    });
    console.log('caste changed', statusConfirmed);

    if (statusConfirmed === false) {
      this.ngxNotificationService.warning('Please choose a caste from the dropdown');
      this.personalForm.get('Castes').setValue('');
      return false;
    }
    return true;

  }

  checkCaste(value) {
    let status = 1;
    let statusConfirmed = false;
    this.casteo.forEach(element => {
      element.forEach(item => {
        if (value !== '' && item.includes(value) && item.length === value.length) {
          console.log('confirmed');
          statusConfirmed = true;
        } else {
          status = 0;
        }
      });
    });
    return new Promise((resolve) => {
      resolve(statusConfirmed);
    });
  }
  onAutocompleteSelected(event, type: string) {
    if (type === 'Locality') {
      this.personalForm.value.Locality = event.formatted_address;
    } else if (type === 'Working') {
      this.personalForm.value.WorkingCity = event.formatted_address;
    } else {
      this.personalForm.value.BirthPlace = event.formatted_address;
    }

    this.familyProfileData.city = event.formatted_address;
    console.log('address of family', event.formatted_address);

  }
  onLocationSelected(e, type: string) {
    if (type === 'Locality') {
      this.familyProfileData.locationFamily = e;
    } else if (type === 'Working') {
      this.familyProfileData.locationWorking = e;
    } else {
      this.familyProfileData.locationBirth = e;
    }
    console.log('location of family', e);
  }
  onAutocompleteSelectedFamily(event) {
    this.familyProfileData.city = event.formatted_address;
    console.log('address of family', this.familyProfileData.city);

  }
  onLocationSelectedFamily(e) {
    //this.familyProfileData.city = e;
    console.log('location of family', e);
  }
  /*
  
  openPersonalDialog(i: number, titleText: string) {
    document.querySelector("#carousel").scrollIntoView();
    const dialogConfig = new MatDialogConfig();
    if (this.innerWidth >= 1024) {
      dialogConfig.maxWidth = "40vh";
      dialogConfig.minWidth = "35vh";
      dialogConfig.maxHeight = "90vh";
    } else {
      dialogConfig.minWidth = "80vw";
      dialogConfig.maxHeight = "80vh";
    }
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      personalDetails: this.personalProfileData,
      familyDetails: this.familyProfileData,
      index: i,
      title: titleText,
    };
    const dialogRef = this.matDialog.open(
      EditPersonalDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((data) => {
      this.getUserProfileData();
    });
  }

  openFamilyDialog() {
    document.querySelector("#carousel").scrollIntoView();
    const dialogConfig = new MatDialogConfig();
    if (this.innerWidth >= 1024) {
      dialogConfig.maxWidth = "40vh";
      dialogConfig.minWidth = "35vh";
      dialogConfig.maxHeight = "90vh";
    } else {
      dialogConfig.minWidth = "80vw";
      dialogConfig.maxHeight = "80vh";
    }
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      familyDetails: this.familyProfileData,
    };
    const dialogRef = this.matDialog.open(
      EditFamilyDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((data) => {
      this.getUserProfileData();
    });
  }

  openPreferenceDialog() {
    const dialogConfig = new MatDialogConfig();
    if (this.innerWidth >= 1024) {
      dialogConfig.maxWidth = "40vh";
      dialogConfig.minWidth = "35vh";
      dialogConfig.maxHeight = "90vh";
    } else {
      dialogConfig.minWidth = "80vw";
      dialogConfig.maxHeight = "80vh";
    }
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      preferencesDetails: this.preferenceProfileData,
    };
    const dialogRef = this.matDialog.open(
      EditPreferenceDialogComponent,
      dialogConfig
    );
    dialogRef.afterClosed().subscribe((res) => {
      this.getUserProfileData();
      // if (res) {
      //   this.preferenceChanged.emit(res);
      // }
    });
  } */
}
