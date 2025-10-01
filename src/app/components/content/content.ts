import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { List } from '../../services/todo-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {

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
