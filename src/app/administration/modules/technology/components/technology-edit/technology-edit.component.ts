import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { bustersLabel } from 'src/app/administration/shared/utils/labelsResource';
import { BusterService } from 'src/app/core/services/buster.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Buster } from 'src/app/shared/models/buster';
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

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.onRemoveBusterKnowledge(busterId)
  }
  public bustersLabel = bustersLabel;



  constructor(
    private formBuilder: FormBuilder,
    private technoService: TechnoService,
    public busterService: BusterService
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

  public onRemoveBusterKnowledge(busterId: number) {
    this.technoService.removeKnowledgeForBuster(this._techno.id, busterId).subscribe(
      () => this._techno.consumers = this._techno.consumers.filter((b) => b.id !== busterId)
    );
  }

  public onAddingBusterKnowledge(buster: Buster) {
    this.technoService.setTechnoToBuster(this._techno.id, buster.id).subscribe(
      () => this._techno.consumers.push(buster)
    );
  }

}
