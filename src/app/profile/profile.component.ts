import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private httpClient: HttpClient,
              private router: Router) { }
  profileForm = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
    account : new FormControl()
  });
  user: any;
  account: any;

  ngOnInit() {
  }

}
