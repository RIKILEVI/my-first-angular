import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ContactComponent, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  showContact = false;

  openContact() {
    this.showContact = true;
  }

  closeContact() {
    this.showContact = false;
  }
}
