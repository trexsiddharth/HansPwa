import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-footer',
    templateUrl: './footer.html',
    styleUrls: ['./footer.css']
})

export class AppFooter implements OnInit {
    
    constructor() {
        
    }
    ngOnInit(): void {
    }
    downloadApp() {
        window.open('https://play.google.com/store/apps/details?id=com.twango.me', '_blank');
    }

    openBlog() {
        window.open('https://hansmatrimony.com/blog/?ngsw-bypass=true');
      }
}