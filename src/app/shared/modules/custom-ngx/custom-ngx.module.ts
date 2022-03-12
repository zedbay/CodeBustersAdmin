import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNgxQuillComponent } from './components/custom-ngx-quill/custom-ngx-quill.component';
import { QuillModule } from 'ngx-quill'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomNgxQuillViewComponent } from './components/custom-ngx-quill-view/custom-ngx-quill-view.component';

const pickableColor = ['#ffffffbe', '#130f2a', '#d4975e', '#FFFFFF', '#e9dac4', '#43355b'];
const pickableFont = ['GothamBold', 'GothamMedium', 'GothamLight'];

@NgModule({
  declarations: [
    CustomNgxQuillComponent,
    CustomNgxQuillViewComponent
  ],
  imports: [
    CommonModule,
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['italic', 'underline', 'strike'],
          [{ 'color': pickableColor }, { 'background': pickableColor }],
          [{ 'header': [1, 2, 3, 4, false] }],
          [{ 'list': 'bullet' }],
          [{ 'align': [] }],
          [{ 'indent': '-1' }, { 'indent': '+1' }],
          ['code-block'],
          ['clean']
        ]
      }
    }),
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CustomNgxQuillComponent,
    CustomNgxQuillViewComponent
  ]
})
export class CustomNgxModule { }
