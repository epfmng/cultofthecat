export class Review {
    id: number | null;
    date: string;
    rating: number;
    text: string;
    userid: number;
    kittenid: number;

    constructor(id: number | null, date: string, rating: number, text: string, userid: number, kittenid: number) {
        this.id = id;
        this.date = date;
        this.rating = rating;
        this.text = text;
        this.userid = userid;
        this.kittenid = kittenid;
    }
}
