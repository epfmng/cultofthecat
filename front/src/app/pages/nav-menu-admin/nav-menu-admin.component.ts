import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-nav-menu-admin',
  templateUrl: './nav-menu-admin.component.html',
  styleUrls: ['./nav-menu-admin.component.scss']
})

export class NavMenuAdminComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(succes => {
      this.users = this.users.filter(user => user.id !== id)
    });
  }
}
