import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ResourceSearchComponent } from './components/resource-search/resource-search.component';
import { ResourceListingComponent } from './components/resource-listing/resource-listing.component';
import { RankSelectorComponent } from './components/rank-selector/rank-selector.component';
import { DropdownModule } from 'primeng/dropdown';
import { PictureInputComponent } from './components/picture-input/picture-input.component';
import { DndDirective } from './directives/dnd.directive';
import { FileZoneComponent } from './components/file-zone/file-zone.component';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    ResourceSearchComponent,
    ResourceListingComponent,
    RankSelectorComponent,
    PictureInputComponent,
    DndDirective,
    FileZoneComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    AutoCompleteModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    ToastModule,
    TooltipModule,
    ConfirmDialogModule
  ],
  exports: [
    ResourceSearchComponent,
    ResourceListingComponent,
    RankSelectorComponent,
    PictureInputComponent,
    DndDirective,
    FileZoneComponent
  ]
})
export class SharedAdministrationModule { }
