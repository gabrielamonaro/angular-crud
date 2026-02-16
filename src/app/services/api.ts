import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:3000';

  getProducts(params?: ParamsList): Observable<ProductApiReturn> {
    let httpParams = new HttpParams();

    if (params) {
      if (params.page) {
        httpParams = httpParams.set('page', String(params.page));
      }
      if (params.perPage) {
        httpParams = httpParams.set('perPage', String(params.perPage));
      }
    }
    return this.http.get<ProductApiReturn>(`${this.BASE_URL}/clothes`, {
      params: httpParams,
    });
  }

  createProduct(productData: CreateProduct): Observable<ProductApiReturn> {
    console.log('Chamou aqui: ', productData);
    return this.http.post<ProductApiReturn>(`${this.BASE_URL}/clothes`, productData);
  }

  updateProduct({ id, ...rest }: Product): Observable<ProductApiReturn> {
    return this.http.put<ProductApiReturn>(`${this.BASE_URL}/clothes/${id}`, rest);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/clothes/${id}`);
  }
}
