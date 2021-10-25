import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechnoService } from 'src/app/core/services/techno.service';
import { Techno } from 'src/app/shared/models/techno';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  public technos: Techno[] = this.activeRoute.snapshot.data.technos;

  public selectedTechno: Techno;

  public creationMode: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private technoService: TechnoService
  ) { }

  ngOnInit(): void {
    this.selectTechno(this.technos[0].id);
  }

  public deleteTechno(technoId: number) {
    this.technoService.delete(technoId).subscribe(
      () => this.technos = this.technos.filter((s) => s.id !== technoId)
    );
  }

  public selectTechno(technoId: number) {
    this.technoService.read(technoId).subscribe(
      (techno: Techno) => {
        this.selectedTechno = techno;
        this.creationMode = false;
      }
    );
  }

  public onUpdateTechno(updatedTechno: Techno) {
    this.technos = this.technos.map(
      (techno: Techno) => techno.id === updatedTechno.id ? updatedTechno : techno
    );
  }

  public onTechnoCreation(techno: Techno) {
    this.technos.push(techno);
    this.selectTechno(techno.id);
  }

}
