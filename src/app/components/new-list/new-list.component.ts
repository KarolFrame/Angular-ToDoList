import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewListFormComponent } from '../new-list-form/new-list-form.component';

@Component({
  selector: 'app-new-list',
  standalone: true,
  imports: [CommonModule, NewListFormComponent],
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent {
  newListFormComponent: boolean = false;

  activateForm = () =>{
    this.toggleForm(!this.newListFormComponent);
  }

  toggleForm(value: boolean){
    this.newListFormComponent = value;
    console.log("achus");
  }

}
