import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{title}}</h2>
    <img [src]="imageUrl">`
})
export class CoursesComponent{
    title = "List of Courses";

    imageUrl = "https://www.fillmurray.com/640/360";
}