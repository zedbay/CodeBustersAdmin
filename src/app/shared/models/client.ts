import { Buster } from "./buster";
import { Resource } from "./ressource";

export interface Client extends Resource {

  name: string;

  contractors: Buster[];

}
