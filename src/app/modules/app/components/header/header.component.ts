import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public visible = true;

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleVisibility(): void {
    this.visible = !this.visible;
  }

}
