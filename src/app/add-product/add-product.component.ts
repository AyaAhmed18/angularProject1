import { Component } from '@angular/core';
import { ICategory } from '../Models/icategory';
import { IProduct } from '../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiProductService } from '../Services/api-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  category:ICategory[]
  newPrd:IProduct={} as IProduct
  constructor(private _apiProduct:ApiProductService,private router:Router){
    this.category=[
      {Id:1,name:"mobiles"},
      {Id:2,name:"Televisions"},
      {Id:3,name:"Labtops"}
      ]
  }
  addNewProduct(){
    this._apiProduct.addProducts(this.newPrd).subscribe({
      next:(res)=>{
        this.router.navigateByUrl('/Product')
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}
