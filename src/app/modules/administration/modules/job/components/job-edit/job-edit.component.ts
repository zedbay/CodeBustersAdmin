import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/modules/administration/shared/components/resource-edit/resource-edit.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { JobService } from 'src/app/core/services/job.service';
import { SquadService } from 'src/app/core/services/squad.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Job } from 'src/app/shared/models/job';
import { Rank } from 'src/app/shared/models/rank';
import { Squad } from 'src/app/shared/models/squad';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent extends ResourceEditComponent<Job> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    underTitle: ['', [Validators.required]],
    description: ['', [Validators.required]],
    rank: ['', [Validators.required]]
  });

  public jobSquadForm: FormGroup = this.formBuilder.group({
    name: [{ value: '', disabled: true }, [Validators.required]]
  });

  public technologiesListingAction: TableAction = {
    onDelete: (technoId: number) => this.onDeleteTechno(technoId)
  }

  constructor(
    private formBuilder: FormBuilder,
    private jobService: JobService,
    public squadService: SquadService,
    public technoService: TechnoService
  ) {
    super(jobService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void {
    if (this._createMode) {
      this.resourceForm.controls.title.setValue('');
      this.resourceForm.controls.underTitle.setValue('');
      this.resourceForm.controls.description.setValue('');
      this.resourceForm.controls.rank.setValue(Rank.Bronze);
      this.resetJobSquadForm();
    }
  }

  protected onChangeResource(): void {
    this.resourceForm.controls.title.setValue(this._resource.title);
    this.resourceForm.controls.underTitle.setValue(this._resource.underTitle);
    this.resourceForm.controls.description.setValue(this._resource.description);
    this.resourceForm.controls.rank.setValue(this._resource.rank);
    if (this._resource.squad) {
      this.setJobSquadForm(this._resource.squad);
    }
  }

  public addOfferInSquad(squad: Squad): void {
    this.jobService.addOfferInSquad(this._resource.id, squad.id).subscribe(
      () => {
        this.setJobSquadForm(squad);
        this._resource.squad = squad;
      }
    );
  }

  public removeOfferInSquad(squadId: number): void {
    this.jobService.removeOfferInSquad(this._resource.id, squadId).subscribe(
      () => {
        this.resetJobSquadForm();
        this._resource.squad = undefined;
      }
    );
  }

  private onDeleteTechno(technoId: number) {
    this.jobService.removeTechnoInJob(this._resource.id, technoId).subscribe(
      () => this._resource.technologies = this._resource.technologies.filter((t) => t.id !== technoId)
    );
  }

  public addTechno(techno: Techno) {
    this.jobService.addTechnoInJob(this._resource.id, techno.id).subscribe(
      () => this._resource.technologies.push(techno)
    );
  }

  private resetJobSquadForm() {
    this.jobSquadForm.controls.name.setValue('');
  }

  private setJobSquadForm(squad: Squad) {
    this.jobSquadForm.controls.name.setValue(squad.name);
  }

}
