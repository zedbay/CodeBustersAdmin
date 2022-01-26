import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

type BusterName = 'Antoine' | 'Alex' | 'Francois' | 'Hedi' | 'Thomas' | 'Default';

@Component({
  selector: 'app-home-community',
  templateUrl: './home-community.component.html',
  styleUrls: ['./home-community.component.scss']
})
export class HomeCommunityComponent implements OnInit {

  private busterImgPath: { [key in BusterName]: string } = {
    'Antoine': imgPath.homeCommunity.antoine,
    'Alex': imgPath.homeCommunity.alex,
    'Francois': imgPath.homeCommunity.francois,
    'Hedi': imgPath.homeCommunity.hedi,
    'Thomas': imgPath.homeCommunity.thomas,
    'Default': imgPath.homeCommunity.background
  };

  public selectedImgPath: string = this.busterImgPath.Default;

  constructor() { }

  ngOnInit(): void { }

  public selectBuster(busterName: BusterName): void {
    this.selectedImgPath = this.busterImgPath[busterName];
  }

}
