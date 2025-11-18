import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { fakeTasks } from './fake_tasks';
import { NewTask } from './new-task/new-task';
import { FormsModule } from "@angular/forms";
import { NewTaskData } from './task/task.model';
type FullTask = NewTaskData & {
  id: string;
  userId: string;
};
@Component({
  selector: 'app-tasks',
  imports: [Task, FormsModule, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;
  @Input() userId?: string;
  tasks: FullTask[] = fakeTasks as FullTask[];
  isAddingTask = false;
  get userSelectedTasks(): FullTask[] {
    // return this.tasks.filter((task) => task.userId === this.userId) as FullTask[];
    const currentUserId = this.userId ? String(this.userId) : null;
    if (!currentUserId) {
      return [];
    }
    return this.tasks.filter((task) => String(task.userId) === currentUserId) as FullTask[];
  }
  trackById(index: number, item: any) {
    return item.id;
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelAdd() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    const newTask: FullTask = {
      id: 't' + (this.tasks.length + 1),
      userId: this.userId!,
      ...taskData
    };
    this.tasks.push(newTask);
    this.isAddingTask = false;

  }
}






