import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-choose-for',
  templateUrl: './choose-for.component.html',
  styleUrls: ['./choose-for.component.css']
})
export class ChooseForComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ChooseForComponent>,) { }
  Relation = new FormControl();
  createProfile: string[] = ['Myself', 'Son', 'Daughter', 'Brother', 'Sister', 'Other'];
  ngOnInit() {
    this.Relation.valueChanges.subscribe((value) => {
      this.dialogRef.close({
        relation: value,
      })
    });
  }
  setValue(index: number, a: string) {
    let buttonn = document.querySelector('.' + a);
    buttonn.classList.remove('.viewButton')
    buttonn.classList.add('.buttonn');
    setTimeout(() => {
      this.Relation.patchValue(this.createProfile[index]);
    }, 20);
  }
}
