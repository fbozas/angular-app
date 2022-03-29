import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `<h2>{{"Title: " + title}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>`
})
export class CoursesComponent{
    title = "List of Courses";

    courses: any[] = [];

    constructor(service: CoursesService){      
        this.courses = service.getCourses();
    }
}