import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private userService: UserService) {
    }

    userLogged: User;
    displayStyle = 'none';

    ngOnInit() {

    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);
        const emailToCheck = ngForm.form.value.email;

        let newUserLogged = new User();

        if (emailToCheck !== '') {
            this.userService.checkEmailUser(emailToCheck).subscribe(
                user => {
                    newUserLogged = user;
                    if (newUserLogged.id != null) {
                        this.displayStyle = 'block';
                        this.userLogged = newUserLogged;
                        this.userService.userId = this.userLogged.id;
                        setTimeout(() => this.closePopup(), 2000);
                        setTimeout(() => this.router.navigateByUrl('/'), 1000);
                    }
                }
            );
        }
    }

    closePopup() {
        this.displayStyle = 'none';
    }
}