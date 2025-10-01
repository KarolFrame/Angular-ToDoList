import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  listName: string;
  taskName: string;
  dueDate: string;
  status: boolean;
  description: string;
  done: boolean;
}

export interface List {
  listName: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private url = 'https://script.google.com/macros/s/AKfycbwDxrCXWwtr1tl01Bw4pPYT1mtnUrQYG2Qd8MXBonjdE1AkBJCp-ntD1Zsc2yZH3vEZ/exec';

  constructor(private http: HttpClient) {}

  getTasks(listName?: string): Observable<Task[]> {
    let url = `${this.url}?action=tasks`;
    if (listName) {
      url += `&list=${encodeURIComponent(listName)}`;
    }
    return this.http.get<Task[]>(url);
  }

  addTask(task: string, done: boolean): Observable<any> {
    return this.http.post(`${this.url}?action=tasks`, { taskName: task, status: done });
  }

  getLists(): Observable<List[]> {
  return this.http.get<List[]>(`${this.url}?action=lists`);
}

  addList(list: string, done: boolean): Observable<any> {
    return this.http.post(`${this.url}?action=lists`, { listName: list });
  }
}
