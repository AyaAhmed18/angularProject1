import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProductServiceService } from '../Services/static-product-service.service';
import { IProduct } from '../Models/iproduct';
import { Location } from '@angular/common';
import { ApiProductService } from '../Services/api-product.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit{
  CurrentPrdID:number=0
  prd:IProduct|null=null
  constructor(private _ActivatedRoute :ActivatedRoute ,
    private _apiProduct:ApiProductService,
     //private _StaticProductServiceService:StaticProductServiceService,
     private Location:Location){

  }
  ngOnInit():void{
    this._ActivatedRoute.paramMap.subscribe((paramMap)=>{
      this.CurrentPrdID=Number(paramMap.get('id'))
      this._apiProduct.getProductById(this.CurrentPrdID).subscribe({
        next:(res)=>{
          this.prd=res
        },
        error:(err)=>{
          console.log(err);
          
        }
       })
    })
  //  this.CurrentPrdID=  Number(this._ActivatedRoute.snapshot.paramMap.get('id')) 
   //  this.prd= this._StaticProductServiceService.getProductById(this.CurrentPrdID)
  
     
  }

  Back(){
    this.Location.back()
  }
}
