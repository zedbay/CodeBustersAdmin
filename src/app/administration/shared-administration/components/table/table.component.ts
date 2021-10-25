import { Component, Input, OnInit } from '@angular/core';
import { TableAction } from '../../models/TableActions.model';
import { TableLabels } from '../../models/TableLabel.mode';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: unknown[] = [];
  @Input() labels: TableLabels[];
  @Input() action: TableAction;

  constructor() { }

  ngOnInit(): void {
  }

}
