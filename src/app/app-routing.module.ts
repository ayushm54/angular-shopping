import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'collection/:title',
    component: CollectionComponent,
    pathMatch: 'full'
  },
  {
    path: 'shop', 
    component: ShopComponent,
    pathMatch: 'full'
  },
  {
    path:"auth",
    component: AuthComponent,
    pathMatch: 'full'
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
