import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: '<h2>{{"Title: " + title}}</h2>'
})
export class CoursesComponent{
    title = "List of Courses";
}