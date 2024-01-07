import { Component, Input } from '@angular/core';

type FieldType = 'TEXT' | 'TEXT_AREA' | 'NUMBER';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class FieldComponent {

    @Input() fieldType: FieldType;
    @Input() name: string;
    @Input() label: string;
}
