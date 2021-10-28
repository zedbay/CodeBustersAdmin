import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Resource } from 'src/app/shared/models/ressource';

@Component({
  selector: 'app-resource-edit',
  templateUrl: './resource-edit.component.html',
  styleUrls: ['./resource-edit.component.scss']
})
export abstract class ResourceEditComponent<T extends Resource> implements OnInit {

  @Output() newResourceEmitter = new EventEmitter<T>();

  @Output() updateResourceEmit = new EventEmitter<T>();

  @Input() set createMode(createMode: boolean) {
    this._createMode = createMode;
    if (createMode) {
      this.onChangeCreateMode();
    }
  }

  @Input() set resource(r: T) {
    if (r) {
      this._resource = r;
      this.onChangeResource();
    }
  };

  public _createMode: boolean = false;
  public _resource: T;

  constructor() { }

  ngOnInit(): void {
  }

  protected abstract onChangeCreateMode(): void;

  protected abstract onChangeResource(): void;

  public abstract createResource(): void;

  public abstract updateResource(): void;

}
