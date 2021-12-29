import { Resource } from "src/app/shared/models/ressource";

export interface TableLabels<T extends Resource> {
  key?: keyof T;
  value?: string;
  formatter?: (v: T) => string;
}
