import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { List } from '../../services/todo-service';
import { CommonModule } from '@angular/common';
import { ListComponent } from "../list-task/list-task.component";
import { NewListComponent } from "../new-list/new-list.component"; 

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, ListComponent, NewListComponent],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{

  lists : List[] = [];
  loading: boolean = true;
  error: any = null;

  constructor(private listsService :  TodoService){}

  ngOnInit(): void {
  this.loadLists(); // carga inicial

  this.listsService.listCreated$.subscribe(() => {
    this.loadLists(); // recarga toda la lista desde el backend
  });
}

loadLists() {
  this.loading = true;
  this.listsService.getLists().subscribe({
    next: (data) => {
      this.lists = data;
      this.loading = false;
    },
    error: (err) => {
      this.error = 'Error al cargar las listas: ' + err.message;
      this.loading = false;
      console.error('Hubo un error al obtener las listas', err);
    }
  });
} 
}
