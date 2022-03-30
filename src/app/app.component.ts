import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses= [
      {id:1, title: "Java"},
      {id:2, title: "C#"},
      {id:3, title: "Python"},
      {id:4, title: "JavaScript"}
  ];

  onAdd(){
    this.courses.push({id: 5, title:"Another Course"});
  }

  onRemove(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  onChange(course: any){
    course.title += " updated";
  }
}
