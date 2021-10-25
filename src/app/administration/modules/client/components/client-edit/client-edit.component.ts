import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/core/services/client.service';
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

  public _client: Client;
  public _createMode: boolean = false;

  public clientForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
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

}
