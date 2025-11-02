import { Component , Input , Output , EventEmitter} from '@angular/core';
import { USERS} from '../fake_users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {

  // selectedUser= USERS[0];
  // @Input({ required: true }) user!: UserData;
  @Input() name: string ='';
  @Input() avatar: string = '';
  @Input({required: true}) id!: string;
  
  @Output() userclicked = new EventEmitter<string>();

  get  userImgPath(){
    return 'assets/users/' + this.avatar;
  }

  onUserClicked(){

    this.userclicked.emit(this.id)
  }
  


  // onUserSelected(id: string){}
  

}




