import { Component } from "@angular/core";
import { CoursesService } from "./app/courses.service";

@Component({
    selector: 'courses',
    template: `<table>
        <tr>
            <td [attr.colspan]="colSpan">Cell 1</td>
        </tr>
    </table>
    <button class="btn btn-primary">Submit</button>`
})
export class CoursesComponent{
    colSpan = 2;
}