import { EventEmitter } from "@angular/core";

interface ErrorStatus {
  error: boolean;
  message: string;
}

export class ErrorService {
  statusEmitter = new EventEmitter<ErrorStatus>();
  timer: any;

  constructor(){

  }

  enableError(message: string) {
    this.statusEmitter.emit({
      error: true,
      message: message,
    });
    clearInterval(this.timer);
    this.timer = setTimeout(() => {
      this.disableError();
    }, 3000);
  }

  disableError() {
    this.statusEmitter.emit({
      message: '',
      error: false,
    })

  }
}