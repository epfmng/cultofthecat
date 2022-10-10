import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { defaultsDeep } from 'lodash';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userTestVisu: User;
  constructor(private loginService: LoginService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const emailToCheck = ngForm.form.value.email;
    if( emailToCheck !== '') {
      this.loginService.checkEmailUser(emailToCheck).subscribe(user => console.log(user));
      this.loginService.checkEmailUser(emailToCheck).subscribe(user => this.userTestVisu = user)};
    if(this.userTestVisu.id != null) {

    }
  }

// setTimeout(()=>this.router.navigateByUrl('/'), 1000)
}