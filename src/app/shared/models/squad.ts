import { Buster } from "./buster";
import { Resource } from "./ressource";

export class Squad extends Resource {

  name: string;

  manager?: Buster;

  members?: Buster[];

}
