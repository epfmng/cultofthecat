import {Component, OnInit} from '@angular/core';
import {Kitten} from '../../models/kitten.model'
import {KittenService} from '../../services/kitten.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    kittens: Kitten[];
    kittenPrint: Kitten;

    constructor(private kittenService: KittenService, private router : Router) {
    }

    ngOnInit(): void {
        this.kittenService.getKittens().subscribe(kittens => {
            this.kittens = kittens;
            console.log(this.kittens)
            this.loadKitten();
        });
    }


    loadKitten(): void {
        if (this.kittenPrint != null) {
            do {
                var idKitten = this.kittens[this.randNum()].id;
            } while (idKitten == this.kittenPrint.id);
        } else {
            var idKitten = this.kittens[this.randNum()].id;
        }

        this.kittenService.getKitten(idKitten)
            .subscribe(kitten => {
                this.kittenPrint = kitten
                console.log(this.kittenPrint);
            });
    }

    randNum(): number {
        var min = 1;
        var max = this.kittens.length;
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    nextKitten(): void {
        this.loadKitten();
    }

    judgeKitten(): void{
        this.router.navigateByUrl('kittens')
    }

}
