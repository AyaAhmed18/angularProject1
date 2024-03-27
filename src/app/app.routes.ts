import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path:'',redirectTo:'/Home', pathMatch:'full'},
    {path:'Home',component:HomeComponent},
    {path:'AboutUs',component:AboutUsComponent},
    {path:'Order',component:OrderComponent},
    {path:'Product',component:ProductComponent},
    {path:'Details/:id',component:DetailsComponent},
    {path:'**',component:NotFoundComponent}
    

];
