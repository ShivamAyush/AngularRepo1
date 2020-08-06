import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private httpClient:HttpClient)
  {

  }

  registerUser(user):Observable<any>
  {
    return this.httpClient.post("http://localhost:8080/UserInfoWebApi/rest/userResource/",{params:user});
  }
}
