import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  title = 'Title';
  summary = 'Summary';
  dueDate = '';
  @Output() add = new EventEmitter<NewTaskData>();
  @Output() cancel = new EventEmitter<void>();
  onCancel() {
    this.cancel.emit();
  }
  onSubmit(form: NgForm) {
    form.control.markAllAsTouched();
    if (form.invalid) {
      return;
    }
    const newTask: NewTaskData = form.value as NewTaskData;
    this.add.emit(newTask);
    form.resetForm();
  }
}