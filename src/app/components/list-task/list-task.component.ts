import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../services/todo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css'],
  imports: [CommonModule, TaskComponent]
})
export class ListComponent implements OnChanges {
  @Input() listName!: string;

  tasks: Task[] = [];
  loading: boolean = true;
  error: any = null;

  constructor(private todoService: TodoService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listName'] && this.listName) {
      this.loadTasks();
    }
  }

  private loadTasks() {
    this.loading = true;
    this.todoService.getTasks(this.listName).subscribe({
      next: (data) => {
        this.tasks = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar las tareas: ' + err.message;
        this.loading = false;
        console.error('Hubo un error al obtener las tareas', err);
      }
    });
  }
}
