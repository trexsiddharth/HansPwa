import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-view-centres',
  templateUrl: './view-centres.component.html',
  styleUrls: ['./view-centres.component.css']
})

export class ViewCentresComponent implements OnInit {

  centres: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.get('https://partner.hansmatrimony.com/api/viewCentres', {headers: headers}).subscribe((res: any) => {
      this.centres = res;
      console.log(this.centres);

      var l = this.centres.length;

      for (let i = 0; i < l; i++) {
      if (i % 2 === 0) {
        // tslint:disable-next-line: max-line-length
        this.centres[i].profile_photo = 'https://matchmakerz.s3.ap-south-1.amazonaws.com/static/matchmakerz/profile_pic/temple.pngimage.jpg';
      } else {
        // tslint:disable-next-line: max-line-length
        this.centres[i].profile_photo = 'https://matchmakerz.s3.ap-south-1.amazonaws.com/static/matchmakerz/profile_pic/temple_yellow.pngimage.jpg';
      }
      }
    });
  }
}
