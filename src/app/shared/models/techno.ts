import { Buster } from "./buster";
import { NeededRelation } from "./job";
import { Resource } from "./ressource";

export class Techno extends Resource {
  name: string;
  consumers: Buster[];

  NEEDED?: NeededRelation | NeededRelation[];
}


