import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { List } from '../../services/todo-service';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content implements OnInit {

  lists : List[] = [];
  loading: boolean = true;
  error: any = null;

  constructor(private listsService :  TodoService){}

  ngOnInit(): void {
    this.listsService.getLists()
  }

}
