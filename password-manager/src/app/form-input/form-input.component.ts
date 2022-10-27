import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input()
  public label: string = ''

  @Input()
  public formGroup!: FormGroup;

  @Input()
  public controlName: string = 'defaultControlName';

  @Input()
  public type: 'text' | 'password' = 'text'

  @Input()
  public placeholder: string = '';

  @Input()
  public required: boolean = false;

  public value: string;
  
  get control(): AbstractControl | null {
    return this.formGroup.get(this.controlName);
  }

  constructor() { }

  ngOnInit(): void {}
}
