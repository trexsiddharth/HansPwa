import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'navBar',
    templateUrl: './navBar.html',
    styleUrls: ['./navBar.css']
})

export class NavBar implements OnInit {
    
    constructor() {
        
    }
    ngOnInit(): void {
        this.navbar();
    }
    navbar(){
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });
        });

    }
    
}