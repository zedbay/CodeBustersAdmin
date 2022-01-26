import { EventEmitter, HostListener, Output } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Output() fileDropped = new EventEmitter<File>();

  @HostListener('dragover', ['$event']) public onDragOver(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(evt): void {
    evt.preventDefault();
    evt.stopPropagation();
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        this.fileDropped.emit(files[i]);
      }
    }
  }

  constructor() { }

}
