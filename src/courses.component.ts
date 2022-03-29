import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `
    <button [style.backgroundColor]="isActive? 'blue': 'red'">Submit</button>`
})
export class CoursesComponent{
    isActive = false;
}