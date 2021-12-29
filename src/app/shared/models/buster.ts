import { Client } from "./client";
import { Project } from "./project";
import { Resource } from "./ressource";
import { Squad } from "./squad";
import { Techno } from "./techno";

export interface Buster extends Resource {
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  squad: Squad;
  rank: string;
  currentClient: Client;
  technologies: Techno[];
  projects: Project[];
  title: string;
  profilPictureName: string;
  startingDate: string;
}
