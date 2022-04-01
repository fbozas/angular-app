import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-material-demo',
  templateUrl: './angular-material-demo.component.html',
  styleUrls: ['./angular-material-demo.component.css']
})
export class AngularMaterialDemoComponent{
  isChecked = true;

  onChange($event: any){
    console.log($event);
  }
}
