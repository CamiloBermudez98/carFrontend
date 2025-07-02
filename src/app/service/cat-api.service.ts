import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
@Injectable({
  providedIn: 'root'
})
export class catApiService {
  ApiURL: string = "";
  constructor(private http: HttpClient) {
    this.ApiURL = environment.URL
   }

  public GetRazas(): Observable<any>{
   
    return this.http.get(`${this.ApiURL}/cats/breeds`);
}

public GetRazasById(IdRaza:string): Observable<any>{
 
    return this.http.get(`${this.ApiURL}/cats/breeds/${IdRaza}`);
}

public GetImageById(IdRaza:string): Observable<any>{
  
  const url = `${this.ApiURL}/images/imagesbybreedid?breed_id=${IdRaza}`
    return this.http.get(url);
}

public GetCatByWord(Value:string): Observable<any>{

  const url = `${this.ApiURL}/cats/breeds/search?q=${Value}`
    return this.http.get(url);
}

public PostLogin(ValueUser:string,password:string): Observable<any>{
  const url = `${this.ApiURL}/users/login`
    return this.http.post(url, { "username":ValueUser, "password": password });
}

public postRegistro(ValueUser:any): Observable<any>{
  const url = `${this.ApiURL}/users/register`
    return this.http.post(url, ValueUser);
}
}
