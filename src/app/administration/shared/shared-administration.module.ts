import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ResourceSearchComponent } from './components/resource-search/resource-search.component';
import { ResourceListingComponent } from './components/resource-listing/resource-listing.component';


@NgModule({
  declarations: [
    ResourceSearchComponent,
    ResourceListingComponent
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
    ResourceSearchComponent,
    ResourceListingComponent
  ]
})
export class SharedAdministrationModule { }
