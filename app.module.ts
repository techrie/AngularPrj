import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { SaladComponent } from './menu/salad/salad.component';
import { StarterComponent } from './menu/starter/starter.component';
import { MenuselectService } from './Menuselect.service';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartEditComponent } from './cart/cart-edit/cart-edit.component';
import { CartService } from './carts.service';
import { ContactSubmitComponent } from './contact-submit/contact-submit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    PizzaComponent,
    SaladComponent,
    StarterComponent,
    CartComponent,
    CartEditComponent,
    ContactSubmitComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment)
  ],
  providers: [MenuselectService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
