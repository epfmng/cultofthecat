import {Component, OnInit} from '@angular/core';
import {Review} from '../../models/review.model';
import {ReviewService} from '../../services/review.service';

@Component({
    selector: 'app-list-reviews',
    templateUrl: './list-reviews.component.html',
    styleUrls: ['./list-reviews.component.css']
})
export class ListReviewsComponent implements OnInit {

    reviews: Review[];

    constructor(private reviewService: ReviewService) {
    }

    ngOnInit() {
        this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
    }

    deleteReview(id: number) {
        this.reviewService.deleteReview(id).subscribe(succes => {
            this.reviews = this.reviews.filter(review => review.id !== id)
        });
    }

}