import { Resource } from "./ressource";
import { Squad } from "./squad";
import { Techno } from "./techno";

export interface Job extends Resource {

  title: string;
  underTitle: string;
  description: string;
  createdDate: string;

  squad: Squad;
  technologies: Techno[];
}
