import { Component, OnInit } from '@angular/core';
import { imgPath } from 'src/app/shared/constants/imgPath';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public imgPath = imgPath;

  constructor() { }

  ngOnInit(): void {
  }

  public openLinkedin() {
    window.open('https://www.linkedin.com/company/code-busters/about/');
  }

}
