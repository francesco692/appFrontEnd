import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private http : HttpClient) { }

   getTest(parameter: string)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/html',
        'Content-Type': 'text/plain; charset=utf-8'
      }),
      responseType: 'text' as 'json'
    };
    return this.http.get<string>("http://127.0.0.1:8052/saluta?parameter="+parameter,httpOptions);
  }
}
