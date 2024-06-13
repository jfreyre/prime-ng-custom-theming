import { Component } from '@angular/core';
import { FormElementsComponent } from '../form-elements/form-elements.component';

@Component({
  selector: 'app-test-jfr',
  standalone: true,
  imports: [FormElementsComponent],
  templateUrl: './test-jfr.component.html',
  styleUrl: './test-jfr.component.css',
})
export class TestJfrComponent {}
