import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-community-description',
  templateUrl: './community-description.component.html',
  styleUrls: ['./community-description.component.scss']
})
export class CommunityDescriptionComponent implements OnInit {

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
  }

}
