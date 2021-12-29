import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BusterService } from 'src/app/core/services/buster.service';
import { Buster } from 'src/app/shared/models/buster';

@Component({
  selector: 'app-buster-profil-picture',
  templateUrl: './buster-profil-picture.component.html',
  styleUrls: ['./buster-profil-picture.component.scss']
})
export class BusterProfilPictureComponent implements OnInit {

  @Input('buster') set setBuster(buster: Buster) {
    this.buster = buster;
    if (buster.profilPictureName) {
      this.downloadProfilePicture();
    }
  };

  public buster: Buster;

  public imgToShow: any;

  constructor(
    private busterService: BusterService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  public uploadProfilPicture(file: File): void {
    this.busterService.uploadProfilPicture(this.buster.id, file).subscribe(
      () => this.downloadProfilePicture()
    );
  }

  public downloadProfilePicture(): void {
    this.busterService.downloadProfilPicture(this.buster.id, this.buster.profilPictureName).subscribe(
      (res: any) => {
        const ab = new ArrayBuffer(res.data.length);
        const view = new Uint8Array(ab);
        for (let i = 0; i < res.data.length; i++) {
          view[i] = res.data[i];
        }
        const img = new Blob([ab], { type: res.ContentType });
        // const link = document.createElement('a');
        // link.href = window.URL.createObjectURL(newFile);
        // link.download = this.buster.profilPictureName;
        // link.click();
        this.imgToShow = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(img));
      }
    );
  }

}
