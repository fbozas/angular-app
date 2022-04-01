import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialDemoComponent } from './angular-material-demo.component';

describe('AngularMaterialDemoComponent', () => {
  let component: AngularMaterialDemoComponent;
  let fixture: ComponentFixture<AngularMaterialDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
