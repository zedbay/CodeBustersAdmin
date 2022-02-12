import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Resource } from 'src/app/shared/models/ressource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export abstract class ResourceComponent<T extends Resource> implements OnInit {

  public resources: T[] = this.activeRoute.snapshot.data.resources;

  public selectedResource: T = undefined;

  public creationMode: boolean = false;

  constructor(
    public activeRoute: ActivatedRoute,
    public resourceService: ResourcesService<T>,
    public router: Router
  ) { }

  ngOnInit(): void {
    if (!!this.resources && !!this.resources[0]) {
      if (this.activeRoute.snapshot.queryParams.resourceId || this.activeRoute.snapshot.queryParams.resourceId === 0) {
        this.selectResource(Number(this.activeRoute.snapshot.queryParams.resourceId));
        return
      }
      this.selectResource(this.resources[0].id);
    }
  }

  public deleteResource(resourceId: number) {
    this.resourceService.delete(resourceId).subscribe(
      () => this.resources = this.resources.filter((r) => r.id !== resourceId)
    );
  }

  public onUpdateResource(updatedResource: T) {
    this.resources = this.resources.map(
      (resource: T) => resource.id === updatedResource.id ? updatedResource : resource
    );
  }

  public selectResource(resourceId: number) {
    this.resourceService.read(resourceId)
      .subscribe((resource: T) => {
        this.router.navigate(
          [],
          {
            relativeTo: this.activeRoute,
            queryParams: { resourceId: resource.id },
            queryParamsHandling: 'merge'
          }).then(() => {
            this.markRessourceAsSelected(resourceId);
            this.selectedResource = resource;
            this.creationMode = false;
          });
      })
  }

  private markRessourceAsSelected(resourceId) {
    this.resources.find(
      (t: T) => t.id === resourceId
    ).selected = true;
  }

  public onNewResource(ressource: T) {
    this.resources.push(ressource);
    this.selectResource(ressource.id);
  }

}
