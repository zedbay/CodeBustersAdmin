import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.scss']
})
export class ClientEditComponent implements OnInit {

  @Input() set clients(client: Client) {
    if (client) {
      this._client = client;
      this.clientForm.controls.name.setValue(client.name);
    }
  }

  public _client: Client;

  public clientForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

  }

}
