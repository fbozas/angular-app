import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>`
})
export class CoursesComponent{
   email = "me@gmail.com";
   onKeyUp(){
        console.log(this.email);
   }
}