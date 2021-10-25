import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BusterService } from 'src/app/core/services/buster.service';
import { Buster } from 'src/app/shared/models/buster';

@Component({
  selector: 'app-buster-search',
  templateUrl: './buster-search.component.html',
  styleUrls: ['./buster-search.component.scss']
})
export class BusterSearchComponent implements OnInit {

  @Output() busterSelection = new EventEmitter<Buster>();

  public busters: Buster[] = [];

  public research: string;

  public results: string[];

  public selectedBuster: Buster;

  constructor(
    private busterService: BusterService
  ) { }

  ngOnInit(): void {
    this.busterService.list().subscribe(
      (busters: Buster[]) => this.busters = busters
    );
  }

  public search(event) {
    this.results = this.busters
      .map((buster: Buster) => `${buster.firstName} ${buster.lastName}`)
      .filter((squadName: string) => squadName.toLocaleLowerCase().includes(event.query.toLocaleLowerCase()));
  }

  public selectBuster(busterName: string) {
    const busterSelected: Buster = this.busters.find(
      (b: Buster) => busterName === `${b.firstName} ${b.lastName}`);
    this.selectedBuster = busterSelected;
  }

  public emitBuster() {
    if (this.selectedBuster) {
      this.busterSelection.emit(this.selectedBuster);
    }
  }

}
