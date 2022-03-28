import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com', name:'' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      className:'field',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    },
    {
      key: 'name',
      type: 'input',
      className: 'field',
      templateOptions:{
        label:'Nome',
        placeholder:'LUcas...',
        required:true
      }
    }
  ];

  onSubmit(model:any) {
    console.log(model);
  }
}