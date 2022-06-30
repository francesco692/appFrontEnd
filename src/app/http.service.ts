import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http : HttpClient) { }

   getTest(parameter: string)
  {
    return this.http.get<string>("http://127.0.0.1:8081/test?parameter=ciao")
    .subscribe(
      (data) => {console.log(data.length)}
    );
  }
}
