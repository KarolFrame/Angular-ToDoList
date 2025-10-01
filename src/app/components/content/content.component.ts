import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { List } from '../../services/todo-service';
import { CommonModule } from '@angular/common';
import { ListComponent } from "../list-task/list-task.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  lists : List[] = [];
  loading: boolean = true;
  error: any = null;

  constructor(private listsService :  TodoService){}

  ngOnInit(): void {
    this.listsService.getLists().subscribe({
      next: (data) =>{
        this.lists = data;
        this.loading = false;
      },
      error: (err) =>{
        this.error = 'Error al cargar las listas' + err.message;
        this.loading = false;
        console.error ('Hubo un error al obtener las listas', err);
      }
    });
  }
}
