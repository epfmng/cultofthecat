import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReviewService} from '../../services/review.service';
import {Router} from '@angular/router';
import {Review} from '../../models/review.model';
import {UserService} from '../../services/user.service';
import {KittenService} from '../../services/kitten.service';
import {DatePipe} from '@angular/common';


@Component({
    selector: 'app-add-review',
    templateUrl: './add-review.component.html',
    styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

    today = new Date();
    pipe = new DatePipe('en-US');
    ChangedFormat = this.pipe.transform(this.today, 'dd/MM/YYYY');
    changedDate = this.ChangedFormat;

    constructor(private reviewService: ReviewService, private router: Router, private userService: UserService,
                private kittenService: KittenService) {
    }

    kittenJudGedImage = '';

    ngOnInit() {
        this.kittenJudGedImage = this.kittenService.kittenJudged.imagepath;
    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);

        const newReview = new Review(
            null,
            this.changedDate,
            ngForm.form.value.rating,
            ngForm.form.value.text,
            this.userService.userId,
            this.kittenService.kittenJudged.id
        );

        this.reviewService.addReview(newReview).subscribe(review => console.log(review));

        setTimeout(() => this.router.navigateByUrl('/'), 1000)
    }
}
