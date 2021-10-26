import { Buster } from "src/app/shared/models/buster";
import { TableLabels } from "../models/TableLabel.mode";

export const technologyLabels: TableLabels[] = [
  { value: 'Name', key: 'name' }
];

export const bustersLabel: TableLabels[] = [
  { value: 'Name', formatter: (b: Buster) => `${b.firstName} ${b.lastName}` },
  { value: 'Email', key: 'email' },
  { value: 'Rank', key: 'rank' },
];

export const clientsLabel: TableLabels[] = [
  { value: 'Name', key: 'name' }
];

export const squadsLabel: TableLabels[] = [
  { value: 'Name', key: 'name' },
];
