import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Produto } from 'src/app/produto.model'
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://web-unit.herokuapp.com/produto';

  constructor(private http: HttpClient) { }

  public postProdutos(produto: Produto) {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  public getProdutos() {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  public deleteProduto(produto: Produto): Observable<{}> {
    return this.http.request('DELETE', this.apiUrl, { body: produto });
  }

  public getByIdProduto(id: number) {
    return this.http.get<Produto>(this.apiUrl + "/" + id);
  }

  public putProduto(produto: Produto) {
    return this.http.put<Produto>(this.apiUrl, produto);
  }


}
