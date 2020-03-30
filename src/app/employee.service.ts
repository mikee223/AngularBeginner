import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { IEmployee } from './interface/employee';
import { throwError,Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return [
      {"id":1, "name": "Mikee","age" : 27 },
      { "id": 2, "name": "Geli", "age": 27 },
      { "id": 3, "name": "Bitoy", "age": 15 },
      { "id": 4, "name": "Peachy", "age": 20 }
    ]
  }

  private _url: string ="/assets/data/EmployeeList.json";

  getEmployees_http() : Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    // return Observable.throw(error.message || "Server Error");
    return throwError(error.message || "Server Error")
  }

}
