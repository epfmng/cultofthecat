import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {KittenService} from '../../services/kitten.service';
import {defaultsDeep} from 'lodash';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-kitten',
    templateUrl: './add-kitten.component.html',
    styleUrls: ['./add-kitten.component.css']
})
export class AddKittenComponent implements OnInit {

    constructor(private kittenService: KittenService, private router: Router) {
    }

    ngOnInit() {
    }

    onSubmit(ngForm: NgForm) {
        console.log(ngForm);
        const newKitten = defaultsDeep({
            id: null,
            firstName: ngForm.form.value.firstName,
            fur: ngForm.form.value.fur,
            race: ngForm.form.value.race,
            age: ngForm.form.value.age,
            imagepath: ngForm.form.value.imagepath,
            sex: ngForm.form.value.sex,
        });

        this.kittenService.addKitten(newKitten).subscribe(kitten => console.log(kitten));

        setTimeout(() => this.router.navigateByUrl('/kittens'), 1000)
    }
}
