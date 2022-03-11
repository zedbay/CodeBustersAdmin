import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ResourcesService } from 'src/app/core/services/resources.service';
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
      this.onChangeResource(r);
    }
  };

  public _createMode: boolean = false;
  public _resource: T;

  public resourceForm: FormGroup;

  constructor(
    public resourceService: ResourcesService<T>
  ) { }

  ngOnInit(): void {
  }

  protected abstract onChangeCreateMode(): void;

  protected abstract onChangeResource(resource: T): void;

  public createResource(): void {
    this.resourceService.create({
      ...this.resourceForm.value
    }).subscribe(
      (r: T) => this.newResourceEmitter.emit(r)
    );
  }

  public updateResource(): void {
    this.resourceService.update({
      ...this._resource,
      ...this.resourceForm.value
    }).subscribe(
      (r: T) => this.updateResourceEmit.emit(r)
    );
  }

}
