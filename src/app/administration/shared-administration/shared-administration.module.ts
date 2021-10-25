import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableModule } from 'primeng/table';
import { BusterSearchComponent } from './components/buster-search/buster-search.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BusterListingComponent } from './components/buster-listing/buster-listing.component';


@NgModule({
  declarations: [
    TableComponent,
    BusterSearchComponent,
    BusterListingComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AutoCompleteModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],
  exports: [
    TableComponent,
    BusterSearchComponent,
    BusterListingComponent
  ]
})
export class SharedAdministrationModule { }
