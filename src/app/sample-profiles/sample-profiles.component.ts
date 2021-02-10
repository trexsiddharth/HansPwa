import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxNotificationService } from 'ngx-kc-notification';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subject } from 'rxjs';
import { timeout, retry, catchError } from 'rxjs/operators';
import { ApiwhaAutoreply } from '../chat/today-profiles/profile-today-model';
import { LanguageService } from '../language.service';
import { ProfileTable } from '../Model/Profile';

@Component({
  selector: 'app-sample-profiles',
  templateUrl: './sample-profiles.component.html',
  styleUrls: ['./sample-profiles.component.css']
})
export class SampleProfilesComponent implements OnInit {

  private idsList: string[] = [];
  private profileList: ApiwhaAutoreply[] = [];
  private profileListSubject = new Subject<ApiwhaAutoreply[]>();
  profilesList$: Observable<ApiwhaAutoreply[]> = this.profileListSubject.asObservable();

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
          this.getUserProfileData();
          }
      });
  }

  getUserProfileData() {
      this.http
        .get(
          'https://partner.hansmatrimony.com/api/leads/sendSample',
          {params: {id: this.idsList.join(',')}}
        )
        .pipe(
          timeout(5000),
          retry(1),
          catchError((e) => {
            this.ngxNotificationService.error(
              'Server Time Out, Try Again Later'
            );
            throw new Error('Server Timeout ' + e);
          }
          )
        )
      .subscribe(
        (result: any) => {
          console.log(result);
          if (result.status === 1) {
            this.profileList = result.data;
            this.profileListSubject.next(this.profileList);
          } else {
            this.ngxNotificationService.error('No Data Found');
          }
        },
        (error: any) => {
          this.spinner.hide();
          console.log(error);
          this.ngxNotificationService.error('Something Went Wrong');
        }
      );
  }

}
