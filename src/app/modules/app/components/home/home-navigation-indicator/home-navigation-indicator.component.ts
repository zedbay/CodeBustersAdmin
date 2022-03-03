import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { HomeContainer } from '../homeContainer.enum';


@Component({
  selector: 'app-home-navigation-indicator',
  templateUrl: './home-navigation-indicator.component.html',
  styleUrls: ['./home-navigation-indicator.component.scss']
})
export class HomeNavigationIndicatorComponent implements OnInit {

  @Input() selectedContainer: HomeContainer;

  public anchors: { [key in HomeContainer]: string } = {
    [HomeContainer.Busters]: 'home-busters',
    [HomeContainer.Community]: 'home-community',
    [HomeContainer.Contact]: 'home-contact'
  }

  public HomeContainer = HomeContainer;

  constructor(
    private scroller: ViewportScroller
  ) { }

  ngOnInit(): void { }

  public selectContainer(container: HomeContainer): void {
    this.scroller.scrollToAnchor(this.anchors[container]);
  }

}
