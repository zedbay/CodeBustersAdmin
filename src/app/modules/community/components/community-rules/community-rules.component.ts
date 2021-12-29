import { Component, Input, OnInit } from '@angular/core';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-community-rules',
  templateUrl: './community-rules.component.html',
  styleUrls: ['./community-rules.component.scss']
})
export class CommunityRulesComponent implements OnInit {

  @Input() site: Site;

  constructor() { }

  ngOnInit(): void {
  }

}
