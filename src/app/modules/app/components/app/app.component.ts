import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { videoPath } from 'src/app/shared/constants/videoPath';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('video', { static: false }) videoplayer: ElementRef;

  public videoPath = videoPath;

  public test = true;

  public videoIsReady = false;

  constructor() { }

  ngOnInit(): void {

  }

  public playVideo() {
    const media = this.videoplayer.nativeElement;
    media.muted = true;
    media.play();
  }


}
