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

addProducts(prd:IProduct):Observable<IProduct>{
   return  this.httpClient.post<IProduct>(`http://localhost:3000/products` , JSON.stringify(prd))
   }
  getAllProducts():Observable<IProduct[]>{
   return this.httpClient.get<IProduct[]>("http://localhost:3000/products")
  }
  getProductById(Id:number):Observable<IProduct>{
    return this.httpClient.get<IProduct>(`http://localhost:3000/products/${Id}`)
  }
  getProductByCatId(catId:number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`http://localhost:3000/products?catId=${catId}`)
  }
 editProducts(prd:IProduct):Observable<IProduct>{
    return  this.httpClient.put<IProduct>(`http://localhost:3000/products${prd.id}` , JSON.stringify(prd))
    }
    delProducts(prd:IProduct):Observable<IProduct>{
      return  this.httpClient.delete<IProduct>(`http://localhost:3000/products${prd.id}`)
      }
 // httpClient=inject(HttpClient)
}
