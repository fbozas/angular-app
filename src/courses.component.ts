import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `
    <input (keyup.enter)="onKeyUp($event)"/>`
})
export class CoursesComponent{
   onKeyUp($event: any){
        console.log($event.target.value);
   }
}