import { Job } from "./job";
import { Resource } from "./ressource";

export enum CandidacyType {
  SPONTANEE = 'SPONTANEE',
  BACK_END = 'BACK END DEVELOPER',
  FRONT_END = 'WEB DEVELOPER'
}

export class Contact extends Resource {

  firstname: string;
  lastname: string;
  mail: string;
  phone: string;
  createdDate?: string;

  answer?: string;

  cv?: string;
  freeField?: string;
  answerType: 'Formulaire de contact' | 'Réponse aux questions';
  candidacyType?: CandidacyType;
  job?: Job;
}
