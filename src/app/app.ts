import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskComponent } from "./components/task/task.component";
import { ListComponent } from "./components/list-task/list-task";
import { CommonModule } from '@angular/common';
import { Content } from "./components/content/content";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskComponent, ListComponent, CommonModule, Content, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
  
}
