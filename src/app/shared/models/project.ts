import { Buster } from "./buster";
import { Rank } from "./rank";
import { Resource } from "./ressource";
import { Techno } from "./techno";

export class Project extends Resource {
  name: string;
  technologies: Techno[];
  workers: Buster[];
  rank: Rank;
  description: string;
  createdDate?: string;
}
