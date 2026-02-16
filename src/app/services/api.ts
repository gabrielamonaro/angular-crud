import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  BASE_URL = 'http://localhost:3000';

  async getProducts(params?: ParamsList): Promise<ProductApiReturn> {
    let httpParams = new HttpParams();

    if (params) {
      if (params.page) {
        httpParams = httpParams.set('page', String(params.page));
      }
      if (params.perPage) {
        httpParams = httpParams.set('perPage', String(params.perPage));
      }
    }

    const result = await firstValueFrom(
      this.http.get<ProductApiReturn>(`${this.BASE_URL}/clothes`, {
        params: httpParams,
      }),
    );
    return result;
  }

  async createProduct(productData: CreateProduct): Promise<ProductApiReturn> {
    const result = await firstValueFrom(
      this.http.post<ProductApiReturn>(`${this.BASE_URL}/clothes`, productData),
    );
    return result;
  }

  async updateProduct({ id, ...rest }: Product): Promise<ProductApiReturn> {
    const result = await firstValueFrom(
      this.http.put<ProductApiReturn>(`${this.BASE_URL}/clothes/${id}`, rest),
    );
    return result;
  }

  async deleteProduct(id: string): Promise<void> {
    const result = await firstValueFrom(this.http.delete<void>(`${this.BASE_URL}/clothes/${id}`));
    return result;
  }
}
