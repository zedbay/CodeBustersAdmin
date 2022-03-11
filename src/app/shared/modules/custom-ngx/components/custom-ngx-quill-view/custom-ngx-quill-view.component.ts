import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-custom-ngx-quill-view',
  templateUrl: './custom-ngx-quill-view.component.html',
  styleUrls: ['./custom-ngx-quill-view.component.scss']
})
export class CustomNgxQuillViewComponent implements OnInit {

  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
