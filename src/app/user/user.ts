import { Component,Input, Output, EventEmitter } from '@angular/core';
import { USERS } from '../fake_users';
import { UserObj } from './user.model';
 

@Component({
  selector: 'app-user',
  standalone: true,
  // imports: [User],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {

  selectedUser = USERS[0];
  @Input({ required: true }) user!: UserObj;
  @Input({required:true}) isSelected!: boolean;
  @Output() userClicked = new EventEmitter<any>();

  onUserClicked() {
    this.userClicked.emit(this.user.id);
  }

  get userImgPath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  changeUser() {
    const randomlndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser = USERS[randomlndex];
  }

}




