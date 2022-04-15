import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { AppPageComponent } from "./app-page/app-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { RewardsPageComponent } from "./rewards-page/rewards-page.component";
import { ShopPageComponent } from "./shop-page/shop-page.component";
import { TicketPageComponent } from "./ticket-page/ticket-page.component";
import { Ticket2PageComponent } from "./ticket2-page/ticket2-page.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainPageComponent },
    { path: 'app', component: AppPageComponent },
    { path: 'rewards', component: RewardsPageComponent },
    { path: 'about', component: AboutComponent },
    { path: 'shop', component: ShopPageComponent },
    { path: 'tickets', component: TicketPageComponent },
    { path: 'ticket', component: Ticket2PageComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
