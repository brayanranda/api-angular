import * as global from 'global';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url=`${global.url}/products`

  constructor(private http:HttpClient) { }

  getProblems() {
    return this.http.get<Product[]>(this.url);
  }
}
