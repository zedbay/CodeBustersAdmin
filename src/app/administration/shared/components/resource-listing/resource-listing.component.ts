import { Component, Input, OnInit } from '@angular/core';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Resource } from 'src/app/shared/models/ressource';
import { TableAction } from '../../models/TableActions.model';
import { TableLabels } from '../../models/TableLabel.mode';

@Component({
  selector: 'app-resource-listing',
  templateUrl: './resource-listing.component.html',
  styleUrls: ['./resource-listing.component.scss']
})
export class ResourceListingComponent<T extends Resource> implements OnInit {

  @Input() resources: T[] = [];
  public resourcesLabels: TableLabels[] = [];
  @Input() resourcesActions: TableAction;
  @Input() resourceService: ResourcesService<T>;

  constructor() { }

  ngOnInit(): void {
    this.resourcesLabels = this.resourceService.labels;
  }

}
