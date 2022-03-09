import { Component, OnInit } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent extends FieldType implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}

  prePopulate(field: FormlyFieldConfig): void {
    if (field.fieldGroup) {
      return;
    }

    field.fieldGroup = [
      {
        fieldGroup: [
          {
            key: 'firstname',
            type: 'input',
            defaultValue: '',
            templateOptions: {
              label: 'First name',
              required: true,
            },
          },
        ],
      },
    ];
  }
}
