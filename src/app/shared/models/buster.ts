import { Client } from "./client";
import { Resource } from "./ressource";
import { Squad } from "./squad";
import { Techno } from "./techno";

export interface Buster extends Resource {
  firstName: string;
  lastName: string;
  email: string;
  squad: Squad;
  rank: string;
  currentClient: Client;
  technologies: Techno[];
}
