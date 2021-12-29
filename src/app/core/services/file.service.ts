import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }

  public getIconNameFromFileName(fileName: string): string {
    if (!fileName.toLocaleLowerCase().split('.')[1]) {
      return 'pi pi-file';
    }
    switch (fileName.toLocaleLowerCase().split('.')[1]) {
      case 'pdf': {
        return 'pi pi-file-pdf';
      }
      case 'docx': case 'doc': case 'txt': {
        return 'pi pi-file';
      }
      case 'xlsx': case 'xls': {
        return 'pi pi-file-excel';
      }
      default: {
        return 'pi pi-image';
      }
    }
  }

  public uploadFile(): Observable<File> {
    return new Observable((observer: Subscriber<File>) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.onchange = (e) => {
        const file: File = (e.target as any).files[0];
        if (file.size > 50000000) {
          observer.error('size');
          observer.complete();
        } else {
          observer.next(file);
          observer.complete();
        }
      };
      input.onclose = () => {
        observer.complete();
      };
      input.click();
    });

  }
}
