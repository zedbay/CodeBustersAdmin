import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityComponent } from './components/community/community.component';
import { RouterModule } from '@angular/router';
import { CommunityTalentComponent } from './components/community-talent/community-talent.component';
import { CommunityRulesComponent } from './components/community-rules/community-rules.component';
import { CommunityDescriptionComponent } from './components/community-description/community-description.component';

@NgModule({
  declarations: [
    CommunityComponent,
    CommunityTalentComponent,
    CommunityRulesComponent,
    CommunityDescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CommunityModule { }
