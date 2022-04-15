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
import { AppRoutingModule } from './app-routing.module';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { Ticket2PageComponent } from './ticket2-page/ticket2-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    AppPageComponent,
    AboutComponent,
    RewardsPageComponent,
    ShopPageComponent,
    TicketPageComponent,
    Ticket2PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
