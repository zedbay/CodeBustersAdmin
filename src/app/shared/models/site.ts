import { Resource } from "./ressource";

export class Site extends Resource {

  bronzeDescription?: string;
  silverDescription?: string;
  goldDescription?: string;
  diamondDescription?: string;

  bronzeShortDescription: string;
  silverShortDescription: string;
  goldShortDescription: string;
  diamondShortDescription: string;

  devRule: string;
  togetherRule: string;
  ambitiousRule: string;
  pleasureRule: string;

  startBusterTitle: string;
  startBusterUnderTitle: string;
  startBusterDescription: string;
  staffBusterTitle: string;
  staffBusterUnderTitle: string;
  staffBusterDescription: string;
  clientBusterTitle: string;
  clientBusterUnderTitle: string;
  clientBusterDescription: string;

  communityDescriptionTitle1: string;
  communityDescriptionUnderTitle1: string;
  communityDescriptionText1: string;
  communityDescriptionTitle2: string;
  communityDescriptionUnderTitle2: string;
  communityDescriptionText2: string;
  communityDescriptionTitle3: string;
  communityDescriptionUnderTitle3: string;
  communityDescriptionText3: string;
}
