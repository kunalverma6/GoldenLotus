import { Routes } from '@angular/router';
import { PublicindexComponent } from './Layout/publiclayout/publicindex/publicindex.component';
import { PublicLayoutComponent } from './Layout/publiclayout/public-layout/public-layout.component';
// import path from 'path';
import { LoginComponent } from './Layout/publiclayout/login/login.component';
import { SecurelayoutComponent } from './Layout/securelayout/securelayout/securelayout.component';
import { DashboardComponent } from './Layout/securelayout/dashboard/dashboard.component';
import { ShopComponent } from './Pages/shop/shop.component';
import { ShopDetailsComponent } from './Pages/shop-details/shop-details.component';

export const routes: Routes = [
  {
    path: 'public',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: PublicindexComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
  // Secure section
  {
    path: 'secure',
    component: SecurelayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'shop',
        component: ShopComponent,
      },
      {
        path: 'shopDetails',
        component: ShopDetailsComponent,
      },
    ],
  },
  // Redirect empty path to 'public' route
  { path: '', redirectTo: 'public', pathMatch: 'full' },
];
