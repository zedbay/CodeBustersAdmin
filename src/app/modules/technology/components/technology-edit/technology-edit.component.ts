import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/shared/components/resource-edit/resource-edit.component';
import { TableAction } from 'src/app/shared/models/TableActions.model';
import { BusterService } from 'src/app/core/services/buster.service';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Buster } from 'src/app/shared/models/buster';
import { Techno } from 'src/app/shared/models/techno';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrls: ['./technology-edit.component.scss']
})
export class TechnologyEditComponent extends ResourceEditComponent<Techno> implements OnInit {

  public resourceForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.onRemoveBusterKnowledge(busterId),
    onConsult: (busterId: number) => this.router.navigate(['/admin'], { queryParams: { resourceId: busterId } })
  }

  constructor(
    private formBuilder: FormBuilder,
    private technoService: TechnoService,
    public busterService: BusterService,
    private router: Router
  ) {
    super(technoService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.name.setValue('');
  }

  protected onChangeResource(techno: Techno): void {
    this._resource = techno;
    this.resourceForm.controls.name.setValue(techno.name);
  }

  public onRemoveBusterKnowledge(busterId: number) {
    this.technoService.removeKnowledgeForBuster(this._resource.id, busterId).subscribe(
      () => this._resource.consumers = this._resource.consumers.filter((b) => b.id !== busterId)
    );
  }

  public onAddingBusterKnowledge(buster: Buster) {
    this.technoService.setTechnoToBuster(this._resource.id, buster.id).subscribe(
      () => this._resource.consumers.push(buster)
    );
  }

}
