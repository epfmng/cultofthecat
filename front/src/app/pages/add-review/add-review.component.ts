import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReviewService} from '../../services/review.service';
import {Router} from '@angular/router';
import {Review} from '../../models/review.model';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

    constructor(private reviewService: ReviewService, private router: Router, private userService: UserService) {
    }

    ngOnInit() {
    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);
        const idUser = this.userService.userId;
        const newReview = new Review(
            null,
            '12/03/2000',
            ngForm.form.value.rating,
            ngForm.form.value.text,
            idUser,
            4
        );

        this.reviewService.addReview(newReview).subscribe(review => console.log(review));

        setTimeout(() => this.router.navigateByUrl('/'), 1000)
    }
}
