import { Rank } from "./rank";
import { Resource } from "./ressource";
import { Squad } from "./squad";
import { Techno } from "./techno";

export interface Job extends Resource {

  title: string;
  underTitle: string;
  description: string;
  createdDate: string;
  rank: Rank;
  localisation: string;

  squad: Squad;
  technologies: Techno[];
}

export class NeededRelation extends Resource {

  createdDate?: string;
  skillCap?: number;

}
