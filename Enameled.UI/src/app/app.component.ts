import { Component, OnInit } from '@angular/core';
import { ErrorService } from './services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'client-src';
  isError: boolean = false;
  errorMessage: string = '';

  constructor(private errorService: ErrorService) {}

  ngOnInit(): void {
    this.errorService.statusEmitter.subscribe(
      (status: { error: boolean, message: string }) => {
        this.isError  = status.error;
        this.errorMessage = status.message;
    })
  }

  closeError() {
    this.errorService.disableError();
  }
}
