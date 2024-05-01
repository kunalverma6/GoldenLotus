import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from '../../../Pages/shop/shop.component';
import { ShopDetailsComponent } from '../../../Pages/shop-details/shop-details.component';

@Component({
  selector: 'app-securelayout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RouterOutlet,
    ShopComponent,
    ShopDetailsComponent,
  ],
  templateUrl: './securelayout.component.html',
  styleUrl: './securelayout.component.css',
})
export class SecurelayoutComponent {}
