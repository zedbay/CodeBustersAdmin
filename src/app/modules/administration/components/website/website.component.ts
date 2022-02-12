import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from 'src/app/core/services/site.service';
import { Site } from 'src/app/shared/models/site';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {

  public site: Site = this.activeRoute.snapshot.data.site;

  public communityDescriptionForm: FormGroup = this.formBuilder.group({
    communityDescriptionTitle1: [this.site.communityDescriptionTitle1, [Validators.required]],
    communityDescriptionUnderTitle1: [this.site.communityDescriptionUnderTitle1, [Validators.required]],
    communityDescriptionText1: [this.site.communityDescriptionText1, [Validators.required]],
    communityDescriptionTitle2: [this.site.communityDescriptionTitle2, [Validators.required]],
    communityDescriptionUnderTitle2: [this.site.communityDescriptionUnderTitle2, [Validators.required]],
    communityDescriptionText2: [this.site.communityDescriptionText2, [Validators.required]],
    communityDescriptionTitle3: [this.site.communityDescriptionTitle3, [Validators.required]],
    communityDescriptionUnderTitle3: [this.site.communityDescriptionUnderTitle3, [Validators.required]],
    communityDescriptionText3: [this.site.communityDescriptionText3, [Validators.required]],
  });

  public busterDescriptionForm: FormGroup = this.formBuilder.group({
    startBusterTitle: [this.site.startBusterTitle, [Validators.required]],
    startBusterUnderTitle: [this.site.startBusterUnderTitle, [Validators.required]],
    startBusterDescription: [this.site.startBusterDescription, [Validators.required]],
    staffBusterTitle: [this.site.staffBusterTitle, [Validators.required]],
    staffBusterUnderTitle: [this.site.staffBusterUnderTitle, [Validators.required]],
    staffBusterDescription: [this.site.staffBusterDescription, [Validators.required]],
    clientBusterTitle: [this.site.clientBusterTitle, [Validators.required]],
    clientBusterUnderTitle: [this.site.clientBusterUnderTitle, [Validators.required]],
    clientBusterDescription: [this.site.clientBusterDescription, [Validators.required]]
  });

  public ranksForm: FormGroup = this.formBuilder.group({
    bronzeDescription: [this.site.bronzeDescription, [Validators.required]],
    silverDescription: [this.site.silverDescription, [Validators.required]],
    goldDescription: [this.site.goldDescription, [Validators.required]],
    diamondDescription: [this.site.diamondDescription, [Validators.required]],
  });

  public rulesForm: FormGroup = this.formBuilder.group({
    devRule: [this.site.devRule, [Validators.required]],
    togetherRule: [this.site.togetherRule, [Validators.required]],
    ambitiousRule: [this.site.ambitiousRule, [Validators.required]],
    pleasureRule: [this.site.pleasureRule, [Validators.required]],
  });

  constructor(
    private siteService: SiteService,
    public activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  public updateSite(formGroup: FormGroup) {
    this.siteService.update({
      id: this.site.id,
      ...formGroup.value
    }).subscribe(
      (d) => console.log(d)
    );
  }

}
