import { Component, OnInit } from '@angular/core';

export enum HomeContainer {
  Busters,
  Community,
  Contact
}

@Component({
  selector: 'app-home-navigation-indicator',
  templateUrl: './home-navigation-indicator.component.html',
  styleUrls: ['./home-navigation-indicator.component.scss']
})
export class HomeNavigationIndicatorComponent implements OnInit {

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
