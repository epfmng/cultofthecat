import { Component, OnInit } from '@angular/core';
import {Kitten} from '../../models/kitten.model'
import {KittenService} from '../../services/kitten.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  kittens : Kitten[];
  kittenPrint : Kitten;
  constructor(private kittenService : KittenService) { }

  ngOnInit(): void {
    this.kittenService.getKittens().subscribe(kittens => {
      this.kittens = kittens;
      console.log(this.kittens)
        this.loadKitten();
    });
  }


   loadKitten(): void{
    if (this.kittenPrint!= null){
    do {
      var newId = this.kittens[this.randNum()].id;
    }while (newId == this.kittenPrint.id);
    }

    var idKitten=this.kittens[this.randNum()].id;
    this.kittenService.getKitten(idKitten)
        .subscribe(kitten => {
            this.kittenPrint = kitten
            console.log(this.kittenPrint);
        });
  }

  randNum(): number{
    var min = 1;
    var max = this.kittens.length;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  nextKitten(): void{
    this.loadKitten();
  }

  judgeKitten(): Kitten{
    return this.kittenPrint;
  }

}
