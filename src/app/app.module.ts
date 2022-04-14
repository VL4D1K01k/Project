import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppPageComponent } from './app-page/app-page.component';
import { AboutComponent } from './about/about.component';
import { RewardsPageComponent } from './rewards-page/rewards-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AppPageComponent,
    AboutComponent,
    RewardsPageComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
