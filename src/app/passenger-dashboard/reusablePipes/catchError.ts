import {catchError, EMPTY, pipe} from "rxjs";

export const RxJS_CatchError = (message?:string) => {
  return pipe(
     catchError((err)=>{
      console.log(message,err)
      return EMPTY
    })
  )
}
