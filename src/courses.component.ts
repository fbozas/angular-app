import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `{{text | summary}}`
})
export class CoursesComponent{
  text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Excepturi ratione reprehenderit nemo numquam ullam eum atque 
        facere, eius corporis quos totam deserunt mollitia magni ut 
        temporibus tenetur ad praesentium vel!`;
}