import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type FieldType = 'TEXT' | 'TEXT_AREA' | 'NUMBER';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => FieldComponent),
          multi: true,
        },
      ],  
})
export class FieldComponent implements ControlValueAccessor {

    @Input() fieldType: FieldType;
    @Input() name: string;
    @Input() label: string;
    @Input() value: any;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    disabled = false;
  
    onChange: any = () => { };
    onTouched: any = () => { };
  
    constructor() { }
  
    ngOnInit(): void { }

    onValueChange() {
        this.valueChange.emit(this.value);
      }
  
    writeValue(value: number): void {
      this.value = value;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    setDisabledState?(isDisabled: boolean): void {
      this.disabled = isDisabled;
    }
    // private valueInter: any = null;

    // @Output() valueChange = new EventEmitter<string>();

    // get value(): any {
    //     return this.valueInter;
    // }
    // @Input() set value(value: any) {
    //     console.log('val', value)
    //     if(value === this.valueInter){
    //         return;
    //     }

    //     this.valueInter = value;
    // }
}
