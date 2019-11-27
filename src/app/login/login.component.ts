import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private httpClient: HttpClient,
              private router: Router) { }
  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });

  signIn() {
    const body = {
    name : this.loginForm.controls.login.value,
    password : this.loginForm.controls.password.value,
    };

    this.httpClient.post<any>('http://localhost:8080/bankList', body).subscribe(success => {
      alert('Success login');
      this.router.navigate(['/login']);
    }, error => alert('Неверный пароль или логин'));
  }

}
