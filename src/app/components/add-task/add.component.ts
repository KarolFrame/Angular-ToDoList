import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector:'app-addTask',
    standalone: true,
    imports:[CommonModule],
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
})

export class AddComponent implements OnInit, AfterViewInit, OnDestroy{

    ngOnInit(): void {
        console.log("Desde el ng on init")
    }

    ngAfterViewInit(): void {
        console.log("Inicializado los componentes hijost")
    }

    ngOnDestroy(): void {
        console.log("componente destruido")
    }
}