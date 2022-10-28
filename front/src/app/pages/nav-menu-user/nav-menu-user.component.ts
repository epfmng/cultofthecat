import {Component, OnInit} from '@angular/core';
import {Kitten} from '../../models/kitten.model';
import {KittenService} from '../../services/kitten.service';

@Component({
  selector: 'app-nav-menu-user',
  templateUrl: './nav-menu-user.component.html',
  styleUrls: ['./nav-menu-user.component.css']
})

export class NavMenuUserComponent implements OnInit {

  kittens: Kitten[];
  kittenPrint: Kitten;

  constructor(private kittenService: KittenService) {
  }

  ngOnInit(): void {
    this.kittenService.getKittens().subscribe(kittens => {
      this.kittens = kittens;
      console.log(this.kittens)
      this.loadKitten();
    });
  }


  loadKitten(): void {
    let idKitten
    let randIndex = this.randNum()
    if (this.kittenPrint != null) {
      do {
        randIndex = this.randNum();
        idKitten = this.kittens[randIndex].id;
      } while (idKitten === this.kittenPrint.id);
    } else {
      randIndex = this.randNum();
    }
    this.kittenPrint = this.kittens[randIndex];
    this.kittenService.kittenJudged = this.kittens[randIndex];
  }

  randNum(): number {
    let min = 0;
    let max = this.kittens.length;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  nextKitten(): void {
    this.loadKitten();
  }

}