import {Component, OnInit} from '@angular/core';
import {Review} from '../../models/review.model';
import {ReviewService} from '../../services/review.service';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-my-reviews',
    templateUrl: './my-reviews.component.html',
    styleUrls: ['./my-reviews.component.scss']
})
export class MyReviewsComponent implements OnInit {

    myReviews: Review[];
    userNotLogged: boolean;
    userLogged: boolean;

    constructor(private reviewService: ReviewService, private userService: UserService) {
    }

    ngOnInit() {
        if(this.userService.userId != null) {
            this.reviewService.getReviewsByUserId(this.userService.userId).subscribe(reviews => this.myReviews = reviews);
            this.userNotLogged = false;
            this.userLogged = true;
        }
        else {
            this.userNotLogged = true;
            this.userLogged = false;
        }
    }

    deleteReview(id: number) {
        this.reviewService.deleteReview(id).subscribe(succes => {
            this.myReviews = this.myReviews.filter(review => review.id !== id)
        });
    }

}