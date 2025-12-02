import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { FormsModule } from '@angular/forms';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { USERS } from './fake_users';
import { RouterOutlet } from '@angular/router';
import { NewUser } from './user/new-user/new-user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, User, Tasks, FormsModule, RouterOutlet,
    NewUser],
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
  showNewUserForm = false;
  onAddUser() {
    this.showNewUserForm = true;
  }
  onCloseNewUserForm() {
    this.showNewUserForm = false;
  }

  onUserCreated(formValue: any) {
    const newId = Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
    const fullName = `${formValue.name.firstName} ${formValue.name.lastName}`.trim();
    const newUser = {
      id: newId,
      name: fullName,
      email: formValue.email,
      avatar: 'assets/users/anonymous.png',
      tasks: [],
    };
    this.users = [newUser, ...this.users];
    this.showNewUserForm = false;
  }



}
