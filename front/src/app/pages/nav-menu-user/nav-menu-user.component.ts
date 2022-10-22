import {Component, OnInit} from '@angular/core';
import {Review} from '../../models/review.model';
import {ReviewService} from '../../services/review.service';

@Component({
  selector: 'app-nav-menu-user',
  templateUrl: './nav-menu-user.component.html',
  styleUrls: ['./nav-menu-user.component.scss']
})

export class NavMenuUserComponent implements OnInit {

  reviews: Review[];

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
  }

  deleteReview(id: number) {
    this.reviewService.deleteReview(id).subscribe(succes => {
      this.reviews = this.reviews.filter(review => review.id !== id)
    });
  }

}
