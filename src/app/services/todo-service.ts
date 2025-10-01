import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

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
  private url = 'http://localhost:3000/api';

  private listCreatedSource = new BehaviorSubject<string | null>(null);
  listCreated$ = this.listCreatedSource.asObservable();

  notifyListCreated(listName: string) {
    this.listCreatedSource.next(listName);
  }

  constructor(private http: HttpClient) {}

  getTasks(listName?: string): Observable<Task[]> {
    let url = `${this.url}/tasks`;
    if (listName) {
      url += `?list=${encodeURIComponent(listName)}`;
    }
    return this.http.get<Task[]>(url);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post(`${this.url}/tasks`, task);
  }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(`${this.url}/lists`);
  }

  addList(list: List): Observable<any> {
    return this.http.post(`${this.url}/lists`, list);
  }
}
