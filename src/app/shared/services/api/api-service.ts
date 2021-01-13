import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public setStateData=new Map()
  constructor(public http: HttpClient) { }

  getCovidMainData(): Observable<any> {
    return this.http.get(environment.baseurl + "total.json")
  }
  getCovidStateData(): Observable<any> {
    return this.http.get(environment.baseurl + "state_data.json")
  }
}
