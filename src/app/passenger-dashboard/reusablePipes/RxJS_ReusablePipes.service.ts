import {catchError, EMPTY, pipe} from "rxjs";
import { MessageService } from 'primeng/api';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
  }
)
export class RxJS_ReusablePipesService {
  constructor(
    private messageService:MessageService
  ) {
  }
   RxJS_CatchError(message?:string) {
     return pipe(
      catchError((err)=>{
        this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: message
          })
        console.log('Delete Error',err)
        return EMPTY
      })
    )
  }

}
