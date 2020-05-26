import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Produto } from 'src/app/produto.model'
import { Observable, throwError } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  public postProdutos(produto: Produto) {
    return this.http.post<Produto>(this.apiUrl, produto)


  }

  public getProdutos() {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  public deleteProduto(produto: Produto): Observable<{}> {
    return this.http.request('DELETE', this.apiUrl, { body: produto})
  }


}
