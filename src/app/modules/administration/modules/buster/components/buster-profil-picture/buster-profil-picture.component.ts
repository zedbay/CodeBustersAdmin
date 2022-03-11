import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BusterService } from 'src/app/core/services/buster.service';
import { PicturesService } from 'src/app/core/services/pictures.service';
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
    private pictureService: PicturesService
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
      (res: any) => this.imgToShow = this.pictureService.transformBlobToPictureUrl(res)
    );
  }

}
