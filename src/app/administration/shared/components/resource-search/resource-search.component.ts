import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourcesService } from 'src/app/core/services/resources.service';
import { Resource } from 'src/app/shared/models/ressource';

@Component({
  selector: 'app-resource-search',
  templateUrl: './resource-search.component.html',
  styleUrls: ['./resource-search.component.scss']
})
export class ResourceSearchComponent<T extends Resource> implements OnInit {

  @Output() selectionEmitter = new EventEmitter<T>();

  @Input() actionLabel: string = 'Add';

  @Input() resourceNameFunction: (r: T) => string;

  @Input() resourceService: ResourcesService<T>;

  public resources: T[] = [];

  public research: string;

  public results: string[];

  public selectedResource: T;

  constructor(
  ) { }

  ngOnInit(): void {
    this.resourceService.list().subscribe(
      (rs: T[]) => this.resources = rs
    );
  }

  public search(event) {
    this.results = this.resources
      .map((r: T) => this.resourceNameFunction(r))
      .filter((name: string) => name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }

  public select(name: string) {
    const selectedResource: T = this.resources.find(
      (r: T) => name === this.resourceNameFunction(r));
    this.selectedResource = selectedResource;
  }

  public emit() {
    if (this.selectedResource) {
      this.selectionEmitter.emit(this.selectedResource);
    }
  }

}
