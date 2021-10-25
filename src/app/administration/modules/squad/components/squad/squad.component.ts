import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SquadService } from 'src/app/core/services/squad.service';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  public squads: Squad[] = this.activeRoute.snapshot.data.squads;

  public selectedSquad: Squad;

  public creationMode: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private squadService: SquadService
  ) { }

  ngOnInit(): void {
    this.selectSquad(this.squads[0].id);
  }

  public deleteSquad(squadId: number) {
    this.squadService.delete(squadId).subscribe(
      () => this.squads = this.squads.filter((s) => s.id !== squadId)
    );
  }

  public onUpdateSquad(squad: Squad) {
    this.squads = this.squads.map(
      (s: Squad) => s.id === squad.id ? squad : s
    );
  }

  public selectSquad(squadId) {
    this.squadService.read(squadId).subscribe(
      (squad: Squad) => {
        this.creationMode = false;
        this.selectedSquad = squad;
      }
    )
  }

  public onNewSquad(squad: Squad) {
    this.squads.push(squad);
    this.selectSquad(squad.id);
  }

}
