import { Observable } from 'rxjs';

export interface IFile {
  readFile: (elementId: number, fileName: string) => void;
  addFile: (elementId: number, file: File) => Observable<boolean>;
}
