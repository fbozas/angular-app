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
}
