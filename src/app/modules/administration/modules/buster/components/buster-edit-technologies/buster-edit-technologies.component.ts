import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnoService } from 'src/app/core/services/techno.service';
import { TableAction } from 'src/app/modules/administration/shared/models/TableActions.model';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-buster-edit-technologies',
  templateUrl: './buster-edit-technologies.component.html',
  styleUrls: ['./buster-edit-technologies.component.scss']
})
export class BusterEditTechnologiesComponent implements OnInit {

  @Input() technologies: Techno[] = [];

  @Input() resourceId: number;

  public technologiesListingAction: TableAction = {
    onDelete: (technoId: number) => this.onDeleteTechno(technoId),
    onConsult: (technoId: number) => this.router.navigate(['/admin/technology'], { queryParams: { resourceId: technoId } })
  }

  constructor(
    public technoService: TechnoService,
    public router: Router
  ) { }

  ngOnInit(): void { }

  public onDeleteTechno(technoId: number) {
    this.technoService.removeKnowledgeForBuster(technoId, this.resourceId).subscribe(
      () => this.technologies = this.technologies.filter((t) => t.id !== technoId)
    );
  }

  public onAddingTechno(techno: Techno) {
    this.technoService.setTechnoToBuster(techno.id, this.resourceId).subscribe(
      () => this.technologies.push(techno)
    );
  }

}
