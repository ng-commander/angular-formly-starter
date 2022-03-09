import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  
  model = {
    // boy: { firstname: 'boy' },
    // girl: { firstname: 'girl' },
  };
  // model = {
  //   boy: { firstname: 'boy' },
  //   girl: { firstname: 'girl' },
  // };

  // fields = [
  //   {
  //     key: 'boy',
  //     defaultValue: {
  //       firstname: ''
  //     },
  //     fieldGroup: [
  //       {
  //         key: 'firstname',
  //         type: 'input',
  //         defaultValue: '',
  //         templateOptions: {
  //           label: 'Boy First name',
  //           required: true,
  //         },
  //       },
  //     ],
  //   },
  //   {
  //     key: 'girl',
  //     defaultValue: {
  //       firstname: ''
  //     },
  //     fieldGroup: [
  //       {
  //         key: 'firstname',
  //         type: 'input',
  //         defaultValue: '',
  //             templateOptions: {
  //           label: 'Girl First name',
  //           required: true,
  //         },
  //       },
  //     ],
  //   },
  // ];

  fields = [
    {
      fieldGroup:[
    
    {
      key: 'boy',
      type: 'person',
    },
    {
      key: 'girl',
      type: 'person',
    }
  ]
}
  ];

  form = new FormGroup({});

  submit() {
    alert(JSON.stringify(this.model));
  }

}
