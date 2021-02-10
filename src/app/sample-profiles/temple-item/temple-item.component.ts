import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temple-item',
  templateUrl: './temple-item.component.html',
  styleUrls: ['./temple-item.component.css']
})
export class TempleItemComponent implements OnInit {
  @Input('imageUrl') imageUrl: string;
  @Input('templeName') templeName: string;
  constructor() { }

  ngOnInit() {
  }

}
