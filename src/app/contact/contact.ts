import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  @Output() close = new EventEmitter<void>();

  model = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  send(form: any) {
    console.log("----- Contact Form Submitted -----");
    console.log("Name:", this.model.name);
    console.log("Email:", this.model.email);
    console.log("Subject:", this.model.subject);
    console.log("Message:", this.model.message);
    console.log("----------------------------------");

    form.reset();
    this.close.emit();
  }

  cancel(form: any) {
    form.reset();
    this.close.emit();
  }
}
