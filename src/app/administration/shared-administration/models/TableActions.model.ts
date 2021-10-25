export interface TableAction {
  onRowClick?: (id: number) => void,
  onDelete?: (id: number) => void 
}
