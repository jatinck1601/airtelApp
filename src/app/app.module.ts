import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopheaderComponent } from './airtel/topheader/topheader.component';
import { LinkheaderComponent } from './airtel/linkheader/linkheader.component';
import { ImageheaderComponent } from './airtel/imageheader/imageheader.component';
import { ExploreheaderComponent } from './airtel/exploreheader/exploreheader.component';
import { FooterheaderComponent } from './airtel/footerheader/footerheader.component';
import { MiddleheaderComponent } from './airtel/middleheader/middleheader.component';
import { RechargeHeaderComponent } from './airtel/recharge-header/recharge-header.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'rechargeHeader', component:  RechargeHeaderComponent},
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    TopheaderComponent,
    LinkheaderComponent,
    ImageheaderComponent,
    ExploreheaderComponent,
    FooterheaderComponent,
    MiddleheaderComponent,
    RechargeHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
