import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  private cep: any;

  constructor(private http : HttpClient){ }
  
  public getCep(cep:String) : Observable<any>{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  }

}
