import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from './task/task';
import { fakeTasks } from './fake_tasks'; 

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
   tasks=fakeTasks;
 @Input() name?: string;
  @Input() userId?: string;



 get userSelectedTasks() {
return this.tasks.filter((task) => task.userId === this.userId)
}
trackById(index: number, item: any) {
    return item.id;
  }
}

