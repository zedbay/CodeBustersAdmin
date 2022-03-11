import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import Quill from 'quill'

const font = Quill.import('formats/font');
font.whitelist = ['GothamLight', 'GothamMedium', 'GothamBold'];
Quill.register(font, true);

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-custom-ngx-quill',
  templateUrl: './custom-ngx-quill.component.html',
  styleUrls: ['./custom-ngx-quill.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomNgxQuillComponent
    }
  ]
})
export class CustomNgxQuillComponent implements OnInit, ControlValueAccessor {

  public value: string;

  onChange = (value) => { };

  onTouched = () => { };

  touched = false;

  disabled = false;

  constructor() { }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

  public onChangeNgxContent(content: string) {
    this.markAsTouched();
    if (!this.disabled) {
      this.onChange(content);
    }
  }

}
