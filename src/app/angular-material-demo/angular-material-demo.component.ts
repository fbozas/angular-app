import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-angular-material-demo',
  templateUrl: './angular-material-demo.component.html',
  styleUrls: ['./angular-material-demo.component.css']
})
export class AngularMaterialDemoComponent{
  emailFormControl = new FormControl('',[Validators.required,Validators.email]);
}
