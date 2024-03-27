import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {

  constructor(private httpClient:HttpClient) { }
  getAllCategoriess():Observable<ICategory[]>{
   return this.httpClient.get<ICategory[]>("http://localhost:3000/Categorires")
  }
}
