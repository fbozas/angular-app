import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `{{course.title | uppercase}} <br>
    {{course.students | number}} <br>
    {{course.rating | number: '2.2-3'}} <br>
    {{course.price | currency: "EUR"}} <br>
    {{course.releaseDate | date: 'shortDate'}}`
})
export class CoursesComponent{
   course = {
        title: "The complete Angular course",
        students: 30123,
        rating: 4.9745,
        price: 190.95,
        releaseDate: new Date(2016,2,3)
   }
}