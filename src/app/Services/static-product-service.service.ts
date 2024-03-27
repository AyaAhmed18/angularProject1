import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductServiceService {
  product:IProduct[];
  constructor(){
 
    this.product=[
      {id:1,name:"samsung",quantity:200,price:13000, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
      {id:2,name:"Hawawi",quantity:1,price:13500, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
      {id:3,name:"Dell",quantity:2,price:23000, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:2},
      {id:4,name:"HP",quantity:5,price:25000, imgUrl:"https://th.bing.com/th?id=OIP.ZXKy1wOO4o4xbsn6BMCwQQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:2},
      {id:5,name:"Nokia",quantity:30,price:10000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
      {id:6,name:"Tosheba",quantity:3,price:23000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:3},
      {id:7,name:"Sharp",quantity:0,price:25000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:3},
      {id:8,name:"Redmi",quantity:1,price:10000, imgUrl:"https://th.bing.com/th?id=OIP.V8NVXODUkODhicTKe7MblAHaIL&w=237&h=262&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",CategoryId:1},
    ];    
    }
   getAllProducts():IProduct[]{
    return this.product
   } 
   getProductById(Id:number):IProduct|null{
    let foundedProduct=this.product.find((prd)=>prd.id==Id);
    return foundedProduct? foundedProduct : null
   }
   getProductByCategoryId(catId:number):IProduct[]{
    if(catId==0){
      return this.product
    }else{
      return this.product.filter((prd)=>prd.CategoryId==catId)
    }
    
   }
}
