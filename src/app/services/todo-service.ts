import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  listName: string;
  taskName: string;
  dueDate?: string;
  status: boolean;
  description?: string;
}

export interface List {
  listName: string;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private url = 'http://localhost:3000/api'; // tu proxy Express

  constructor(private http: HttpClient) {}

  // Obtener tareas (GET)
  getTasks(listName?: string): Observable<Task[]> {
    let url = `${this.url}/tasks`;
    if (listName) {
      url += `?list=${encodeURIComponent(listName)}`;
    }
    return this.http.get<Task[]>(url);
  }

  // Añadir tarea (POST)
  addTask(task: Task): Observable<any> {
    return this.http.post(`${this.url}/tasks`, task);
  }

  // Obtener listas (GET)
  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.url}/lists`);
  }

  // Añadir lista (POST)
  addList(list: List): Observable<any> {
    return this.http.post(`${this.url}/lists`, list);
  }
}
