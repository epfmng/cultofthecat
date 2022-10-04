import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ReviewService} from '../../services/review.service';
import { defaultsDeep } from 'lodash';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(ngForm: NgForm) {
    console.log(ngForm);
    const review = defaultsDeep({
      id: null,
      firstName: ngForm.form.value.firstName,
      fur: ngForm.form.value.fur,
      race: ngForm.form.value.race,
      age: ngForm.form.value.age,
      // imagepath : ngForm,
      sex : ngForm.form.value.sex,
    });

    this.reviewService.addReview(review).subscribe(review => console.log(review));

    setTimeout(()=>this.router.navigateByUrl('/'), 1000)
  }
}
