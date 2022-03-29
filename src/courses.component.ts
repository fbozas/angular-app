import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `
    <input #email (keyup.enter)="onKeyUp(email.value)"/>`
})
export class CoursesComponent{
   onKeyUp(email: any){
        console.log(email);
   }
}