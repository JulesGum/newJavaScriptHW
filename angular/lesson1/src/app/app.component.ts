import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  users = [];

  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe((users) => {
      console.log(users);
    });
  }
}
