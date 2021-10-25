import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrls: ['./technology-edit.component.scss']
})
export class TechnologyEditComponent implements OnInit {

  @Output() newTechno = new EventEmitter<Techno>();
  @Output() updateTechnoEmit = new EventEmitter<Techno>();

  @Input() set createMode(createMode: boolean) {
    this._createMode = createMode;

    if (createMode) {
      this.technoForm.controls.name.setValue('');
    }
  }

  @Input() set techno(techno: Techno) {
    if (techno) {
      this._techno = techno;
      this.technoForm.controls.name.setValue(techno.name);
    }
  }

  public _techno: Techno;
  public _createMode: boolean = false;

  public technoForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private technoService: TechnoService
  ) { }

  ngOnInit(): void {
  }

  public updateTechno() {
    this.technoService.update({
      ...this._techno,
      ...this.technoForm.value
    }).subscribe(
      (t: Techno) => this.updateTechnoEmit.emit(t)
    );
  }

  public createTechno() {
    this.technoService.create({
      ...this.technoForm.value
    }).subscribe(
      (t: Techno) => this.newTechno.emit(t)
    );
  }

}
