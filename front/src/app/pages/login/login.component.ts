import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) { }

  userLogged: User;

  displayStyle = 'none';

  ngOnInit() {

  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const emailToCheck = ngForm.form.value.email;

    let newUserLogged = new User();

    if( emailToCheck !== '') {
      // this.loginService.checkEmailUser(emailToCheck).subscribe(user => console.log(user));
      this.loginService.checkEmailUser(emailToCheck).subscribe(
          user => {newUserLogged = user;
            if( newUserLogged.id != null) {
              this.displayStyle = 'block';
              this.userLogged = newUserLogged;
              setTimeout(()=> this.closePopup(), 2000);
              setTimeout(()=>this.router.navigateByUrl('/'), 1000);
            }
          }
      );
    }
  }

  closePopup() {
    this.displayStyle = 'none';
  }
}