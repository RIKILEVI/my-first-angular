import { Component, Input } from '@angular/core';
import { USERS} from '../fake_users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {

  selectedUser= USERS[0];
  // @Input({ required: true }) user!: UserData;
  @Input() name!: string;
  @Input() avatar!: string;
  
  get  userImgPath(){
    return 'assets/users/' + this.avatar;
  }
  changeUser(){
    const randomIndex = Math.floor(Math.random() * USERS.length);
    this.selectedUser =USERS[randomIndex];
  }

  

}






























// import { Component, Input } from '@angular/core';
// import {UserData} from '../fake_users';


// @Component({
//   selector: 'app-user',
//   imports: [],
//   templateUrl: './user.html',
//   styleUrl: './user.css'
// })

// export class User {

//   @Input({ required: true }) user!: UserData;

  
//   get  userImgPath(){
//     return 'assets/users/' + this.user.avatar;
//   }

  

// }

