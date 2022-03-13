import { EventEmitter, Injectable } from '@angular/core';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  public onToast = new EventEmitter<Message>();

  constructor() { }

  public sendToast(message: Message) {
    this.onToast.emit(message);
  }
}
