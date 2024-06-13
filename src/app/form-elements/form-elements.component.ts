import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    MultiSelectModule,
    CheckboxModule,
    RadioButtonModule,
    ToggleButtonModule,
    SliderModule,
    ButtonModule,
  ],
  templateUrl: './form-elements.component.html',
  styleUrl: './form-elements.component.css',
})
export class FormElementsComponent {
  formulaire!: FormGroup;
  options!: any[];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulaire = this.fb.group({
      texte: [''],
      date: [null],
      nombre: [null],
      selection: [null],
      multiSelection: [[]],
      checkbox: [false],
      radio: [null],
      toggle: [false],
      slider: [0],
    });

    this.options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ];
  }

  onSubmit() {
    console.log(this.formulaire.value);
  }
}
