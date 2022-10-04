import { Component, OnInit } from '@angular/core';
import {Kitten} from '../../models/kitten.model';
import {KittenService} from '../../services/kitten.service';

@Component({
  selector: 'app-list-kittens',
  templateUrl: './list-kittens.component.html',
  styleUrls: ['./list-kittens.component.scss']
})
export class ListKittensComponent implements OnInit {

  kittens: Kitten[];

  constructor(private kittenService: KittenService) { }

  ngOnInit() {
    this.kittenService.getKittens().subscribe(kittens => this.kittens = kittens);
  }

  deleteUser(id: number) {
    this.kittenService.deleteKitten(id).subscribe(succes => {
      this.kittens = this.kittens.filter(kitten => kitten.id !== id)
    });
  }

}
