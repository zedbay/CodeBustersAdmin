import { Buster } from "./buster";
import { Resource } from "./ressource";
import { Techno } from "./techno";

export class Project extends Resource {
  name: string;
  technologies: Techno[];
  workers: Buster[];
}
