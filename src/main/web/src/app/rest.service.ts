import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import {Observable,of} from 'rxjs';
import {map,catchError,tap,retry} from 'rxjs/operators';
import {AppSettings} from './app-settings';
import {Config} from './config';


const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) {
  }

  private extractData(res: Response) {
  let body = res;
  return body || { };
  }

  signup(data): Observable<any> {
  return this.http.post(AppSettings.API_ENDPOINT + AppSettings.SIGNUP_API,JSON.stringify(data)).pipe(
    map(this.extractData));
    catchError(this.handleError<any>('addProduct'));
  }

  getConfig(key){
    let URL=AppSettings.API_ENDPOINT + AppSettings.GET_CONFIG+key;
    return this.http.get<Config[]>(URL);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
