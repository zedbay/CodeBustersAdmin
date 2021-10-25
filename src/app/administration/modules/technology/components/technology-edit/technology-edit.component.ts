import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrls: ['./technology-edit.component.scss']
})
export class TechnologyEditComponent implements OnInit {

  @Input() set techno(techno: Techno) {
    if (techno) {
      this._techno = techno;
      this.technoForm.controls.name.setValue(techno.name);
    }
  }

  public _techno: Techno;

  public technoForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
