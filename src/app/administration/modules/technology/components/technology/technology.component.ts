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

  constructor(
    private activeRoute: ActivatedRoute,
    private technoService: TechnoService
  ) { }

  ngOnInit(): void {
    this.selectTechno(this.technos[0].id);
  }

  public selectTechno(technoId: number) {
    this.technoService.read(technoId).subscribe(
      (techno: Techno) => this.selectedTechno = techno
    );
  }

}
