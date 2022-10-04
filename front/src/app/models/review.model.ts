import { defaultsDeep } from 'lodash';

export class Review {
  id: number;
  date: string;
  rating: number;
  text: string;
  userid: number;
  kittenid: number;

  constructor(review?: Partial<Review>) {
    defaultsDeep(this, review);
  }
}
