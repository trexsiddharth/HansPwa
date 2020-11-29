export interface ProfileTable {
profile: ProfileData;
family: FamilyData;
preferences: PreferenceData;
country: string[];
}

export interface ProfileData {
    id: number;
  temple_id: string;
  priority_temple: number;
  identity_number: string;
  lead_id: number;
  name: string;
  gender: string;
  mobile_profile: string;
  photo: string;
  photo_score: number;
  profiles_sent: number;
  facebook?: any;
  aadhar: string;
  birth_place: string;
  birth_time: string;
  birth_date: string;
  weight: number;
  height: string;
  education: string;
  degree: string;
  college: string;
  occupation: string;
  profession: string;
  religion: string;
  working_city: string;
  disability: string;
  food_choice: string;
  manglik: string;
  skin_tone?: any;
  monthly_income: any;
  marital_status: string;
  citizenship: string;
  office_address: string;
  about: string;
  lead_created_at: string;
  created_at: string;
  updated_at: string;
  children: number;
  disabled_part?: any;
  precedence: number;
  profile_type?: any;
  abroad: string;
  is_invisible: number;
  wishing_to_settle_abroad: number;
  is_renewed: string;
  blatitude?: any;
  bNS?: any;
  blongitude?: any;
  bEW?: any;
  country?: any;
  state?: any;
  comments?: any;
  enquiry_date: string;
  followup_call_on: string;
  upgrade_renew: number;
  wantBot: number;
  manglik_id?: any;
  plan_name?: any;
  carousel: string;
  corrupt_carousel?: any;
  caste_id?: any;
  company?: any;
  additional_qualification?: any;
  bot_language?: any;
  page_skipped?: any;
  token?: any;
  upgrade_request: string;
  upgrade_comment?: any;
  photo_score_updated?: any;
  is_active: number;
  matchmaker_id?: any;
  is_working?: any;
  amount_fix?: any;
  is_profile_pic?: any;
  bonus?: any;
  is_delete: number;
  payment_status: number;
  matchmaker_note?: any;
  want_horoscope_match?: any;
  botuser?: any;
  is_approved: number;
  approved_by?: any;
  not_interested: number;
  is_automate_approve: number;
  is_completed: number;
  fcm_id?: any;
  bot_status: string;
  last_seen: string;
  lead_status: number;
  fcm_app?: any;
  is_paid: number;
  is_premium: number;
  education_score: string;
  lat_locality?: any;
  long_locality?: any;
  dual_approved: number;
  is_approved_on?: any;
  double_approval: number;
  profile_pdf?: any;
  is_premium_interest?: any;
  exhaust_reject: number;
  temp_upgrade: number;
  is_sales_approve: number;
  si_event: number;
  is_subscription_view: number;
  freshness_score: number;
  salary_score: number;
  testSalaryScore: number;
  revise_education?: any;
  edu_score: number;
  goodness_score: number;
  goodness_score_female: number;
  data_score: number;
  visibility_score: number;
  zvaluePhoto: number;
  zSalaryScore: number;
  zFreshnessScore: number;
  zeduScore: number;
  zGoodNessScore: number;
  zGoodNessScoreFemale: number;
  testGoodness: number;
  zdataScore: number;
  activity_score: number;
  zactivity_score: number;
  zvisibility_score: number;
  starvation_score: number;
  zStarvation: number;
  boost_score: number;
  zBoost_score: number;
  request_by?: any;
  crm_created: number;
  call_count: number;
  profile_exclude: number;
  unapprove_carousel?: any;
  is_call_back: number;
  call_back_query?: any;
  last_si_date: string;
  testProfileGoodNess_score: number;
  last_reject_date?: any;
  exhaust_reject_count: number;
  boost_goodNess_score: number;
  is_deleted: number;
  deleted_by?: any;
  temple_name: string;
  caste: string;
    }

export interface FamilyData {
  id: number;
  temple_id: string;
  identity_number: string;
  name: string;
  relation: string;
  livingWithParents?: any;
  locality: string;
  landline: string;
  family_photo?: any;
  city: string;
  native: string;
  email: string;
  unmarried_sons: number;
  married_sons: number;
  unmarried_daughters: number;
  married_daughters: number;
  family_type: string;
  house_type: string;
  religion: string;
  caste: string;
  gotra: string;
  occupation: string;
  family_income: number;
  budget: string;
  office_address: string;
  father_status: string;
  mother_status: string;
  created_at: string;
  updated_at: string;
  marriage_budget_not_applicable?: any;
  email_not_available?: any;
  mother_tongue?: any;
  sub_caste?: any;
  country?: any;
  state?: any;
  occupation_mother?: any;
  address?: any;
  about?: any;
  caste_id?: any;
  zodiac?: any;
  father_off_addr?: any;
  office_address_mother?: any;
  email_verified: number;
    }

export interface PreferenceData {
  id: number;
  identity_number: string;
  temple_id: string;
  age_min: number;
  age_max: number;
  height_min: string;
  height_max: string;
  caste: string;
  marital_status: string;
  manglik: string;
  food_choice: string;
  working: string;
  occupation?: any;
  sub_occupation?: any;
  income_min: number;
  income_max: number;
  citizenship?: any;
  description?: any;
  membership?: any;
  caste_no_bar: number;
  created_at: string;
  updated_at: string;
  source?: any;
  amount_collected: number;
  insentive: string;
  validity: string;
  payment_method: string;
  receipt_url?: any;
  status: number;
  mother_tongue: string;
  no_pref_caste?: any;
  is_paid: number;
  pref_city: string;
  paid_score: number;
  amount_collected_date: string;
  zPaidScore: number;
  roka_charge?: any;
  validity_month?: any;
  religion: string;
  pref_state: string;
  pref_country: string;
  pref_country_id: string;
  pref_state_id: string;
  temple_name: string;
}
