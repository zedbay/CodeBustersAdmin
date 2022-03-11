import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNgxQuillComponent } from './components/custom-ngx-quill/custom-ngx-quill.component';
import { QuillModule } from 'ngx-quill'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomNgxQuillViewComponent } from './components/custom-ngx-quill-view/custom-ngx-quill-view.component';

@NgModule({
  declarations: [
    CustomNgxQuillComponent,
    CustomNgxQuillViewComponent
  ],
  imports: [
    CommonModule,
    QuillModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CustomNgxQuillComponent,
    CustomNgxQuillViewComponent
  ]
})
export class CustomNgxModule { }
