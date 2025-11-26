import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { USERS } from './fake_users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('firstapp');
  users = USERS;
  selectedUser?: any;

  onUserSelected(userId: string) {
    const userClicked = this.users.find(user => user.id === userId);
    console.log('user Clicked from father', userClicked);
    this.selectedUser = userClicked;
  }
}
