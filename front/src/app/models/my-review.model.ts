export class MyReview {
    id: number | null;
    date: string;
    rating: number;
    text: string;
    kittenid: number;
    kittenname: string;
    kittenimagepath: string;

    constructor(id: number | null, date: string, rating: number, text: string, kittenid: number, kittenname: string,
                kittenimagepath: string) {
        this.id = id;
        this.date = date;
        this.rating = rating;
        this.text = text;
        this.kittenid = kittenid;
        this.kittenname = kittenname;
        this.kittenimagepath = kittenimagepath;
    }
}