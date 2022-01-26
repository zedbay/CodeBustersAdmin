import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-file-zone',
  templateUrl: './file-zone.component.html',
  styleUrls: ['./file-zone.component.scss'],
  providers: [MessageService]
})
export class FileZoneComponent implements OnInit {

  public filesToUpload: File[] = [];
  @Input() fileNames: string[];
  @Input() editionMode: boolean = true;

  @Input() elementId: number;

  @Output() upload = new EventEmitter<File>();
  @Output() download = new EventEmitter<void>();

  constructor(
    public fileService: FileService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void { }

  public deleteFile(fileName: string): void {
    this.fileNames = this.fileNames.filter((fn: string) => fn !== fileName);
  }

  public downloadFile(): void {
    this.download.emit();
  }

  public displayUploadFile(): void {
    this.fileService.uploadFile().subscribe(
      (file: File) => this.addFile(file),
      () => this.messageService.add({
        severity: 'error',
        summary: 'Le fichier est trop volumineux',
        detail: 'La taille maximum d\'un fichier est de 50Mo'
      })
    );
  }

  public addFile(file: File): void {
    this.upload.emit(file);
  }

  public getFileNames(): string[] {
    let filesNames: string[] = this.filesToUpload.map((file: File) => file.name);
    if (this.fileNames && this.fileNames.length > 0) {
      filesNames = filesNames.concat(this.fileNames);
    }
    return filesNames;
  }

}
