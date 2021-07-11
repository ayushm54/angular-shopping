import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigateComponent } from './navigate/navigate.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollectionComponent } from './collection/collection.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';
import { ShopComponent } from './shop/shop.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from "ngx-toastr";
import { SpinnerComponent } from './spinner/spinner.component';
import { CartDropdownComponent } from './cart-dropdown/cart-dropdown.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AppStoreModule } from './store/app-store.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutItemComponent } from './checkout-item/checkout-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigateComponent,
    HeaderComponent,
    HomeComponent,
    MenuItemComponent,
    CollectionComponent,
    CollectionItemComponent,
    ShopComponent,
    SigninComponent,
    SignupComponent,
    AuthComponent,
    SpinnerComponent,
    CartDropdownComponent,
    CartItemComponent,
    CheckoutComponent,
    CheckoutItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ 
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
