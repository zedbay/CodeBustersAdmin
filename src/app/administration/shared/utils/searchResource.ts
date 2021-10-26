import { Buster } from "src/app/shared/models/buster";
import { Client } from "src/app/shared/models/client";
import { Squad } from "src/app/shared/models/squad";
import { Techno } from "src/app/shared/models/techno";

export function resourceNameFunctionTechno(techno: Techno): string {
  return techno.name;
}

export function resourceNameFunctionClient(client: Client): string {
  return client.name;
}

export function resourceNameFunctionSquad(squad: Squad): string {
  return squad.name;
}

export function resourceNameFunctionBuster(buster: Buster): string {
  return `${buster.firstName} ${buster.lastName}`;
}
