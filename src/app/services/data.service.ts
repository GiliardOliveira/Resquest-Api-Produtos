import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/app/produto.model'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://web-unit.herokuapp.com/produto';



  constructor(private http: HttpClient) { }

  getProdutos() {
    return this.http.get<Produto[]>(this.apiUrl);

  }

}
