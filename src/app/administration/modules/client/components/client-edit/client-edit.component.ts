import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableAction } from 'src/app/administration/shared/models/TableActions.model';
import { bustersLabel } from 'src/app/administration/shared/utils/labelsResource';
import { BusterService } from 'src/app/core/services/buster.service';
import { ClientService } from 'src/app/core/services/client.service';
import { Buster } from 'src/app/shared/models/buster';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  @Output() newClient = new EventEmitter<Client>();
  @Output() updateClientEmit = new EventEmitter<Client>();

  @Input() set createMode(createMode: boolean) {
    this._createMode = createMode;

    if (createMode) {
      this.clientForm.controls.name.setValue('');
    }
  }

  @Input() set clients(client: Client) {
    if (client) {
      this._client = client;
      this.clientForm.controls.name.setValue(client.name);
    }
  }

  public bustersListingAction: TableAction = {
    onDelete: (busterId: number) => this.deleteContractorForClient(busterId)
  }
  public bustersLabel = bustersLabel;

  public _client: Client;
  public _createMode: boolean = false;

  public clientForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    public busterService: BusterService
  ) { }

  ngOnInit(): void {

  }

  public updateClient() {
    this.clientService.update({
      ...this._client,
      ...this.clientForm.value
    }).subscribe(
      (c: Client) => this.updateClientEmit.emit(c)
    );
  }

  public createClient() {
    this.clientService.create({
      ...this.clientForm.value
    }).subscribe(
      (c: Client) => this.newClient.emit(c)
    );
  }

  public deleteContractorForClient(busterId: number) {
    this.busterService.removeCurrentClient(busterId, this._client.id).subscribe(
      () => this._client.contractors = this._client.contractors.filter((c) => c.id !== busterId)
    );
  }

  public addContractotForClient(buster: Buster) {
    this.busterService.addCurrentClient(buster.id, this._client.id).subscribe(
      () => this._client.contractors.push(buster)
    );
  }

}
