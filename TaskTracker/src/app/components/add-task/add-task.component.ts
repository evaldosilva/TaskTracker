import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {
  @Output() onAddTask  : EventEmitter<Task> = new EventEmitter()

  text: string
  day: string
  reminder: boolean = false

  onSubmit(){
    if(!this.text)
    {
      alert('Add text')
      return
    }
    else
    {
      const newTask : Task = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.onAddTask.emit(newTask);

      this.text = ''
      this.day = ''
      this.reminder = false
    }
  }
}
