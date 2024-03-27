import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, output } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { CommonModule } from '@angular/common';
import { ICategory } from '../Models/icategory';
import { FormsModule } from '@angular/forms';
import { NationalIdPipe } from '../Pipes/national-id.pipe';
import { CodePipePipe } from '../Pipes/code-pipe.pipe';
//import { StaticProductServiceService } from '../Services/static-product-service.service';
import { Router } from '@angular/router';
import { ApiProductService } from '../Services/api-product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,FormsModule,NationalIdPipe,CodePipePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnChanges,OnInit{
  products:IProduct[];
  category:ICategory[];
  selectedCatId:number=0;
  nationalID:string="29909011509345";
  code:string="00000000000000000000000"
 filterProducts:IProduct[]=[]
 Totalorderprice:number=0
 @Input() recievedCatId:number = 0;
 @Output() OnTotalPriceChanged:EventEmitter<IProduct>;
 
constructor(private router:Router,private _ApiProduct:ApiProductService){
 //this.filterProducts=this._StaticProductServiceService.product
  
this.products=[
  {id:1,name:"samsung",quantity:200,price:13000, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
  {id:2,name:"Hawawi",quantity:1,price:13500, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
  {id:3,name:"Dell",quantity:2,price:23000, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:2},
  {id:4,name:"HP",quantity:5,price:25000, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:2},
  {id:5,name:"Nokia",quantity:30,price:10000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
  {id:6,name:"Tosheba",quantity:3,price:23000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:3},
  {id:7,name:"Sharp",quantity:0,price:25000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:3},
  {id:8,name:"Redmi",quantity:1,price:10000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
];
//this.filterProducts=this.products
this.OnTotalPriceChanged=new EventEmitter<IProduct>()
this.category=[
  {Id:1,name:"mobiles"},
  {Id:2,name:"Televisions"},
  {Id:3,name:"Labtops"}
  ]
  
}
  ngOnInit(): void {
    this._ApiProduct.getAllProducts().subscribe({
      next:(res)=>{
        this.filterProducts=res
        console.log(res);
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
navigateToDetails(id:number){
  this.router.navigateByUrl(`/Details/${id}`);
  //this.router.navigate(['/Details',id])
}
buy(products:IProduct) {
  if (products.quantity > 0) {
    this.OnTotalPriceChanged.emit(products)
    products.quantity--;
   // this.Totalorderprice += products.price;
    
  }}
// buy(products:IProduct) {
//   if (products.quantity > 0) {
//     products.quantity--;
//     //this.Totalorderprice += product.Price;
//   }}
// buy(products:IProduct) {
//   if (products.quantity > 0) {
//     products.quantity--;
//     this.Totalorderprice += products.price;
//     this.OnTotalPriceChanged.emit(this.Totalorderprice)
//   }}



ngOnChanges() {
 // this.manageProduct()
 //this.filterProducts=
 //this._StaticProductServiceService.getProductByCategoryId(this.recievedCatId)
 this._ApiProduct.getProductByCatId(this.recievedCatId).subscribe({
  next:(res)=>{
    this.filterProducts=res
  },
  error:(err)=>{
    console.log(err);
    
  }
})
}
manageProduct(){
  if(this.recievedCatId==0){
    this.filterProducts=this.products
  }else{
    this.filterProducts=this.products.filter(p=>p.CategoryId==this.recievedCatId)
  }
}

}

