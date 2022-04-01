import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-demo',
  templateUrl: './angular-material-demo.component.html',
  styleUrls: ['./angular-material-demo.component.css']
})
export class AngularMaterialDemoComponent{
  colors = [
    {id: 1, name: "red"},
    {id: 2, name: "blue"},
    {id: 3, name: "yellow"},
  ] 
}
