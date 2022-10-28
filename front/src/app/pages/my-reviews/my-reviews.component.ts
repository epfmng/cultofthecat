import {Component, OnInit} from '@angular/core';
import {MyReview} from '../../models/my-review.model';
import {ReviewService} from '../../services/review.service';
import {UserService} from '../../services/user.service';
import {KittenService} from '../../services/kitten.service';


@Component({
    selector: 'app-my-reviews',
    templateUrl: './my-reviews.component.html',
    styleUrls: ['./my-reviews.component.css']
})
export class MyReviewsComponent implements OnInit {

    myReviews: MyReview[];
    userLogged: boolean;

    constructor(private reviewService: ReviewService, private userService: UserService, private kittenService: KittenService) {
    }

    ngOnInit() {
        /*this.reviewService.getReviewsByUserId(this.userService.userId)
            .subscribe(reviews => {
                this.myReviews = reviews,
                this.userLogged = this.userService.userId != null;
                    console.log('my reviews without if', this.myReviews)}
            );*/

        if (this.userService.userId != null) {
            this.reviewService.getReviewsByUserId(this.userService.userId)
                .subscribe(reviews => {
                    this.myReviews = reviews,
                    console.log('my reviews', this.myReviews)}
                );
            this.userLogged = true;
        } else {
            this.userLogged = false;
        }
    }

    deleteReview(id: number) {
        this.reviewService.deleteReview(id).subscribe(succes => {
            this.myReviews = this.myReviews.filter(review => review.id !== id)
        });
    }
}