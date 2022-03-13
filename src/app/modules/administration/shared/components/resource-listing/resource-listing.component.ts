import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Resource } from 'src/app/shared/models/ressource';
import { TableAction } from '../../models/TableActions.model';
import { TableLabels } from '../../models/TableLabel.mode';

@Component({
  selector: 'app-resource-listing',
  templateUrl: './resource-listing.component.html',
  styleUrls: ['./resource-listing.component.scss'],
  providers: [ConfirmationService]
})
export class ResourceListingComponent<T extends Resource> implements OnInit {

  @Input() resources: T[] = [];
  public resourcesLabels: TableLabels<T>[] = [];
  @Input() resourcesActions: TableAction;
  @Input() resourceService: ResourcesService<T>;
  @Input() disableSelection: boolean = false;

  constructor(
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.resourcesLabels = this.resourceService.labels;
  }

  public selectElement(ressource: T): void {
    if (this.disableSelection) { return; }
    this.resources.forEach((t: T) => t.selected = false);
    ressource.selected = true;
    if (this.resourcesActions && this.resourcesActions.onRowClick) {
      this.resourcesActions.onRowClick(ressource.id);
    }
  }

  public onDeleteRessource(resource: T): void {
    this.confirmationService.confirm({
      message: 'Confirmer la supression ? Cette action est définitive',
      accept: () => {
        this.resourcesActions.onDelete(resource.id);
      }
    });

  }

}
