import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  public transformBlobToPictureUrl(res: any): SafeUrl {
    const ab = new ArrayBuffer(res.data.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < res.data.length; i++) {
      view[i] = res.data[i];
    }
    const img = new Blob([ab], { type: res.ContentType });
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
  }

}
