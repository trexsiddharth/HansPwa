import { Component, Input, OnInit } from '@angular/core';
import {features} from '../../../assets/Data/data.js';
import { fade, landing } from '../animations.js';
@Component({
   selector: 'app-features',
   templateUrl: './features.component.html',
   styleUrls: ['./features.component.css'],
   animations:[
     fade,landing
   ]
})

export class Features implements OnInit {
    features:any;
    constructor() {
        this.features = features;
    }

    ngOnInit(): void {
    }
}
