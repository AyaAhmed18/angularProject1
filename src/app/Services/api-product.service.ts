import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
@Injectable({
  providedIn: 'root'
})

export class ApiProductService {
  //private httpClient:HttpClient
  constructor(private httpClient:HttpClient) { }
  getAllProducts():Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>("http://localhost:3000/products")
  }
  getProductById(Id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`http://localhost:3000/products/${Id}`)
  }
  getProductByCatId(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`http://localhost:3000/products?catId=${catId}`)
  }
 // htt