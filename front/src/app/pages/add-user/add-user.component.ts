import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {defaultsDeep} from 'lodash';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

    constructor(private userService: UserService, private router: Router) {
    }

    displayStyle = 'none';

    ngOnInit() {
    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);
        const user = defaultsDeep({
            id: null,
            firstName: ngForm.form.value.firstName,
            lastName: ngForm.form.value.lastName,
            age: ngForm.form.value.age,
            email: ngForm.form.value.email,
        });

        this.userService.checkEmailUser(user.email).subscribe(
            userExist => {
                if (userExist.id == null) {
                    this.userService.addUser(user).subscribe(userResponse => console.log(userResponse));
                    setTimeout(() => this.router.navigateByUrl('/users'), 1000);
                } else {
                    this.displayStyle = 'block';
                }
            }
        );
    }
}
