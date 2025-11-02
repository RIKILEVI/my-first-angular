import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { USERS } from './fake_users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  users = USERS;
  protected readonly title = signal('lesson-3');

  selectedUser = this.users[0];

  onUserSelected(idUserClicked: string){
    const newUser =  this.users.find((user)=>user.id == idUserClicked);
    if(newUser)
      this.selectedUser = newUser
  }
}








