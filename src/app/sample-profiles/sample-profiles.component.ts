import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subject } from 'rxjs';
import { timeout, retry, catchError } from 'rxjs/operators';
import { LanguageService } from '../language.service';
import { ProfileTable } from '../Model/Profile';

@Component({
  selector: 'app-sample-profiles',
  templateUrl: './sample-profiles.component.html',
  styleUrls: ['./sample-profiles.component.css']
})
export class SampleProfilesComponent implements OnInit {

  private idsList: string[] = [];
  private profileList: ProfileTable[] = [];
  private profileListSubject = new Subject<ProfileTable[]>();
  profilesList$: Observable<ProfileTable[]> = this.profileListSubject.asObservable();

  constructor(private route: ActivatedRoute,
              private spinner: NgxSpinnerService,
              private ngxNotificationService: NgxNotificationService,
              private http: HttpClient,
              private languageService: LanguageService) { }

  ngOnInit() {
    localStorage.setItem('language', 'english');
    this.languageService.setProfileLanguage();
    this.route.paramMap.subscribe(
      (map: any) => {
        if (map.params.ids) {
          console.log((map.params.ids as string).split(','));
          this.idsList = (map.params.ids as string).split(',');
          this.idsList.forEach(
            (profileId: string) => {
              this.getUserProfileData(profileId, '0');
            }
          );
          }
      });
  }

  getUserProfileData(id: string, isLead: string) {
      const myprofileData = new FormData();
      myprofileData.append(
        'id', id
      );
      myprofileData.append('contacted', '1');
      myprofileData.append(
        'is_lead', isLead
      );
      this.http
        .post<ProfileTable>(
          'https://partner.hansmatrimony.com/api/getProfile',
          myprofileData
        )
        .pipe(
          timeout(7000),
          retry(2),
          catchError((e) => {
            this.ngxNotificationService.error(
              'Server Time Out, Try Again Later'
            );
            throw new Error('Server Timeout ' + e);
          }
          )
        )
      .subscribe(
        (data: any) => {
          console.log(data);
          this.profileList.push(data);
          this.profileListSubject.next(this.profileList);
        },
        (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.ngxNotificationService.error('Something Went Wrong');
        }
      );
  }

}
