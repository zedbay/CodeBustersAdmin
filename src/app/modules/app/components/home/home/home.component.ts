import { Component, OnInit } from '@angular/core';

export enum HomeContainer {
  Busters,
  Community,
  Contact
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public HomeContainer = HomeContainer;

  public selectedContainer: HomeContainer = HomeContainer.Busters;

  constructor() { }

  ngOnInit(): void {
  }

  public selectContainer(container: HomeContainer): void {
    this.selectedContainer = container;
  }

  public isContainerSelected(container: HomeContainer): boolean {
    return this.selectedContainer === container;
  }

}
