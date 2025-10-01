import { AfterViewInit, Component, Input, input, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-task',
    standalone: true,
    imports:[CommonModule],
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css'],
})

export class TaskComponent{
    @Input() taskName!: string;
    @Input() dueDate!: string;
    @Input() status!: boolean;
    @Input() description!: string;
}