import { Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from "./components/add-task/add.component";
import { ListTask } from "./components/list-task/list-task";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddComponent, ListTask],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  encapsulation: ViewEncapsulation.None,
})
export class App {
  protected readonly title = signal('first-project');
}
