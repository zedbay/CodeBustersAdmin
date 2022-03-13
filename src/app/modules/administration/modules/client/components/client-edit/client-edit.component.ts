import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResourceEditComponent } from 'src/app/modules/administration/shared/components/resource-edit/resource-edit.component';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { BusterService } from 'src/app/core/services/buster.service';
import { ClientService } from 'src/app/core/services/client.service';
import { Buster } from 'src/app/shared/models/buster';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent extends ResourceEditComponent<Client> implements OnInit {

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.deleteContractorForClient(busterId),
    onConsult: (busterId: number) => this.router.navigate(['/admin'], { queryParams: { resourceId: busterId } })
  }

  public resourceForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    public formBuilder: FormBuilder,
    public clientService: ClientService,
    public busterService: BusterService,
    private router: Router
  ) {
    super(clientService);
  }

  ngOnInit(): void { }

  protected onChangeCreateMode(): void {
    this.resourceForm.controls.name.setValue('');
  }
  protected onChangeResource(client: Client): void {
    this.resourceForm.controls.name.setValue(client.name);
  }

  public deleteContractorForClient(busterId: number) {
    this.busterService.removeCurrentClient(busterId, this._resource.id).subscribe(
      () => this._resource.contractors = this._resource.contractors.filter((c) => c.id !== busterId)
    );
  }

  public addContractotForClient(buster: Buster) {
    this.busterService.addCurrentClient(buster.id, this._resource.id).subscribe(
      () => this._resource.contractors.push(buster)
    );
  }

}
