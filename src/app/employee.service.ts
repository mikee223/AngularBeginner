import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IEmployee } from './interface/employee';
import { Observable } from 'rxjs';

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
    return this.http.get<IEmployee[]>(this._url);
  }

}
