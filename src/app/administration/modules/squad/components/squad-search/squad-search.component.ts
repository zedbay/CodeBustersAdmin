import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SquadService } from 'src/app/core/services/squad.service';
import { Squad } from 'src/app/shared/models/squad';

@Component({
  selector: 'app-squad-search',
  templateUrl: './squad-search.component.html',
  styleUrls: ['./squad-search.component.scss']
})
export class SquadSearchComponent implements OnInit {

  @Output() squadSelection = new EventEmitter<Squad>();

  public squads: Squad[] = [];

  public research: string;

  public results: string[];

  public selectedSquad: Squad;

  constructor(
    private squadService: SquadService
  ) { }

  ngOnInit(): void {
    this.squadService.list().subscribe(
      (squads: Squad[]) => this.squads = squads
    );
  }

  public search(event) {
    this.results = this.squads
      .map((squad: Squad) => squad.name)
      .filter((squadName: string) => squadName.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }

  public selectSquad(squadName: string) {
    const squadSelected: Squad = this.squads.find((s) => s.name === squadName);
    this.selectedSquad = squadSelected;
  }

  public emitSquad() {
    if (this.selectedSquad) {
      this.squadSelection.emit(this.selectedSquad);
    }
  }

}
