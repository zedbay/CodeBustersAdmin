import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusterService } from 'src/app/core/services/buster.service';
import { Buster } from 'src/app/shared/models/buster';

@Component({
  selector: 'app-buster',
  templateUrl: './buster.component.html',
  styleUrls: ['./buster.component.scss']
})
export class BusterComponent implements OnInit {

  public busters: Buster[] = this.activeRoute.snapshot.data.busters;

  public selectedBuster: Buster = undefined;

  public creationMode: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute,
    private busterService: BusterService
  ) { }

  ngOnInit(): void {
    this.selectBuster(this.busters[0].id);
  }

  public deleteBuster(busterId: number) {
    this.busterService.delete(busterId).subscribe(
      () => this.busters = this.busters.filter((b) => b.id !== busterId)
    );
  }

  public onUpdateBuster(updatedBuster: Buster) {
    this.busters = this.busters.map(
      (buster: Buster) => buster.id === updatedBuster.id ? updatedBuster : buster
    );
  }

  public selectBuster(id: number) {
    this.busterService.read(id)
      .subscribe((buster: Buster) => {
        this.selectedBuster = buster;
        this.creationMode = false;
      })
  }

  public onNewBuster(newBuster: Buster) {
    this.busters.push(newBuster);
    this.selectBuster(newBuster.id);
  }

}
