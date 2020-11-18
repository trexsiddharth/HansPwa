import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'testimonial-cards',
    templateUrl: './testimonial-cards.component.html',
    styleUrls: ['./testimonial-cards.component.css']
})

export class TestimonialCards implements OnInit {
    @Input() testimonial:any;
    constructor() {
        
    }

    ngOnInit(): void {
    }
}