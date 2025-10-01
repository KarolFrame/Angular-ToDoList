import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-new-list-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-list-form.component.html',
  styleUrls: ['./new-list-form.component.css']
})
export class NewListFormComponent {
  newListName: string = "";

  constructor(private todoService: TodoService){}

  onSubmit(): void{
    if(this.newListName.trim()){
      this.todoService.addList({ listName: this.newListName }).subscribe({
        next: (response) =>{
          console.log('Lista creada con exito:', response);
          this.newListName = ""
        },
        error: (err) =>{
          console.log('Error al crear la lista: ', err)
        }
      });
    }
  }
 }
