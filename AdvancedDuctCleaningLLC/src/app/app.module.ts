import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import { VideoResourcesComponent } from './video-resources/video-resources.component';
import { VideoResourcesCarouselComponent } from './video-resources/video-resources-carousel/video-resources-carousel.component';
import { FooterAdditionalInfoComponent } from './footer-additional-info/footer-additional-info.component';
import { OurCompanyComponent } from './pages/our-company/our-company.component';
import { StepsComponent } from './pages/steps/steps.component';
import { BeforeAndAfterComponent } from './pages/before-and-after/before-and-after.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HomeComponent,
    NotFoundComponent,
    VideoResourcesComponent,
    VideoResourcesCarouselComponent,
    FooterAdditionalInfoComponent,
    OurCompanyComponent,
    StepsComponent,
    BeforeAndAfterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
