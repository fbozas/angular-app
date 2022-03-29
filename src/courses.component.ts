import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `
    <input (keyup)="onKeyUp($event)"/>`
})
export class CoursesComponent{
   onKeyUp($event: any){
        if($event.keyCode == 13) console.log("ENTER was pressed");
   }
}