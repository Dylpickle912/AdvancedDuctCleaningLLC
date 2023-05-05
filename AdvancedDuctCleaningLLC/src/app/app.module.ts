import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { VideoResourcesComponent } from './video-resources/video-resources.component';
import { VideoResourcesCarouselComponent } from './video-resources/video-resources-carousel/video-resources-carousel.component';
import { FooterAdditionalInfoComponent } from './footer-additional-info/footer-additional-info.component';
import { OurCompanyComponent } from './pages/our-company/our-company.component';
import { StepsComponent } from './pages/steps/steps.component';
import { BeforeAndAfterComponent } from './pages/before-and-after/before-and-after.component';
import { WhyCleanAirDuctsComponent } from './pages/why-clean-air-ducts/why-clean-air-ducts.component';
import { VideoResourceCenterComponent } from './pages/video-resource-center/video-resource-center.component';
import { BecomingScamProofComponent } from './pages/becoming-scam-proof/becoming-scam-proof.component';
import { IndoorAirAndYourHealthComponent } from './pages/indoor-air-and-your-health/indoor-air-and-your-health.component';
import { PartnersInProtectionComponent } from './pages/partners-in-protection/partners-in-protection.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { ScamAlertComponent } from './pages/scam-alert/scam-alert.component';
import { ContactAdvancedDuctCleaningComponent } from './pages/contact-advanced-duct-cleaning/contact-advanced-duct-cleaning.component';
import { RequestQuoteComponent } from './pages/request-quote/request-quote.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AsbestosComponent } from './pages/asbestos/asbestos.component';

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
    BeforeAndAfterComponent,
    WhyCleanAirDuctsComponent,
    VideoResourceCenterComponent,
    BecomingScamProofComponent,
    IndoorAirAndYourHealthComponent,
    PartnersInProtectionComponent,
    ScamAlertComponent,
    ContactAdvancedDuctCleaningComponent,
    RequestQuoteComponent,
    SpinnerComponent,
    AsbestosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HammerModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
