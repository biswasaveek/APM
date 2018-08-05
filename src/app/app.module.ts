import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star.component';
import { RatingMsgComponent } from './shared/rating-msg/rating-msg.component';
import {ProductService} from './products/product.service';
import {HttpClientModule} from '@angular/common/http';
import {ProductDetailComponent} from './products/product-detail.component';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    RatingMsgComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
