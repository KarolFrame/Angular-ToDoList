import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  taskName: string;
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
  const query = listName ? `?list=${listName}` : '';
  return this.http.get<Task[]>(`${this.url}?action=tasks${query}`);
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
