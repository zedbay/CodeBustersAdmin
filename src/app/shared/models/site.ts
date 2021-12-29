import { Resource } from "./ressource";

export class Site extends Resource {

  bronzeDescription?: string;
  silverDescription?: string;
  goldDescription?: string;
  diamondDescription?: string;

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
}
