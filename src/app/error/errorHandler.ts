import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { DataService } from '../data/data.service';

@Injectable()
export class MyErrorHandler implements ErrorHandler {
 constructor(private injector: Injector) {
        
    }

  handleError(error) {
   let dataService =  <DataService>this.injector.get(DataService)
    // do something with the exception
    dataService.log(error);
  }
}