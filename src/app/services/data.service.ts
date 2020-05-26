import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Produto } from 'src/app/produto.model'


const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),

  body: {
    id: 'produto.id'
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  Produtos() {
    throw new Error("Method not implemented.");
  }
  subscribe(log: { (message?: any, ...optionalParams: any[]): void; (message?: any, ...optionalParams: any[]): void; }) {
    throw new Error("Method not implemented.");
  }

  apiUrl = 'https://web-unit.herokuapp.com/produto';




  constructor(private http: HttpClient) { }




  public getProdutos() {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  public deleteProduto() {
   return this.http.delete(this.apiUrl)

  }



}
