import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-join',
  templateUrl:'join.component.html',
  styleUrls: ['./join.component.sass']
})
export class JoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  join = new FormGroup({
  	username : new FormControl(''),
  	email: new FormControl(''),
  	password: new FormControl('')
  })

}
