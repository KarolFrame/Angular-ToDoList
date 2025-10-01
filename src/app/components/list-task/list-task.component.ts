import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from '../../services/todo-service';

interface Task {
  listName: string;
  taskName: string;
  dueDate: string;
  status: boolean;
  description: string;
}

@Component({
  selector: 'app-list-task',
  imports: [CommonModule],
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListComponent implements OnInit {
  @Input() listName!: string;


  tasksByList: { [listName: string]: Task[] } = {};

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    
  }
}