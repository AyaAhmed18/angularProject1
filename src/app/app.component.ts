import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [NavbarComponent,FooterComponent,ProductComponent,OrderComponent,RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_p1';
}
