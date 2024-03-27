import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICategory } from '../Models/icategory';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../Models/iproduct';
import { ApiCategoryService } from '../Services/api-category.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements OnInit{
  selectedCatId:number=0;
  TotalPrice:number=0;
  BuyedProducts:IProduct[]=[]
  category:ICategory[]=[];
  constructor(private _apiCategory:ApiCategoryService){
    // this.category=[
    //   {Id:1,name:"mobiles"},
    //   {Id:2,name:"Televisions"},
    //   {Id:3,name:"Labtops"}
    //   ]
      
  }
  ngOnInit(): void {
    this._apiCategory.getAllCategoriess().subscribe({
      next:(res)=>{
        this.category=res
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
  // ChangePrice(TotalPriceEv:number){
  //   this.TotalPrice=TotalPriceEv
   
  // }
  ChangePrice(prod:IProduct){
    this.BuyedProducts.push(prod)
  }
  removeProduct(productToRemove: any) {
    const index = this.BuyedProducts.indexOf(productToRemove); 
    if (index !== -1) {
      this.BuyedProducts.splice(index, 1); 
    }
  }
}
