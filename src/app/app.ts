import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { USERS } from './fake_users';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('firstapp');
  users = USERS;
  selectedUser?: any;


  onUserSelected(userId: string) {
    const userClicked = this.users.find((user) => user.id === userId)
    console.log('user Clicked from father', userClicked);
    this.selectedUser = userClicked
  }
}



























// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Header } from './header/header';
// import { USERS } from './fake_users';
// import { User } from './user/user';
// import { Tasks } from './tasks/tasks';
// import { FormsModule } from '../../node_modules/@angular/forms/index';


// @Component({
//   selector: 'app-root',
//   imports: [Header, User, Tasks],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('firstapp');
//   users = USERS;
//   selectedUser?: any;

//   onUserSelected(userId: string) {
//     const userClicked = this.users.find((user) => user.id === userId)
//     console.log('user Clicked from father', userClicked);
//     this.selectedUser = userClicked
//   }

// }

