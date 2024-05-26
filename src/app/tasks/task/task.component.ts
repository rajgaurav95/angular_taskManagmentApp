import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: {
    id: string;
    userId: string;
    title: string;
    summary: string;
    dueDate: string;
  };
}
