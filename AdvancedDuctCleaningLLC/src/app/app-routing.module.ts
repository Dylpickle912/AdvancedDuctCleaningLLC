import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NgModule} from "@angular/core";
import {OurCompanyComponent} from "./pages/our-company/our-company.component";
import {StepsComponent} from "./pages/steps/steps.component";
import {BeforeAndAfterComponent} from "./pages/before-and-after/before-and-after.component";
import {WhyCleanAirDuctsComponent} from "./pages/why-clean-air-ducts/why-clean-air-ducts.component";
import {VideoResourceCenterComponent} from "./pages/video-resource-center/video-resource-center.component";
import {BecomingScamProofComponent} from "./pages/becoming-scam-proof/becoming-scam-proof.component";
import {IndoorAirAndYourHealthComponent} from "./pages/indoor-air-and-your-health/indoor-air-and-your-health.component";
import {ScamAlertComponent} from "./pages/scam-alert/scam-alert.component";
import {RequestQuoteComponent} from "./pages/request-quote/request-quote.component";
import {AsbestosComponent} from "./pages/asbestos/asbestos.component";
import {MeetOurOwnerComponent} from "./pages/meet-our-owner/meet-our-owner.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Advanced Duct Cleaning LLC', pathMatch: 'full' },
  { path: 'our-company', component: OurCompanyComponent, title: 'Our Company', pathMatch: 'full' },
  { path: 'Scott-Crull', component: MeetOurOwnerComponent, title: 'Scott Crull', pathMatch: 'full' },
  { path: 'steps', component: StepsComponent, title: 'Steps to a Professional Air Duct Cleaning', pathMatch: 'full' },
  { path: 'before-and-after', component: BeforeAndAfterComponent, title: 'Before and After', pathMatch: 'full' },
  { path: 'why-clean-air-ducts', component: WhyCleanAirDuctsComponent, title: 'Why Clean Air Ducts?', pathMatch: 'full' },
  { path: 'protecting-your-family', component: VideoResourceCenterComponent, title: 'Protecting Your Family', pathMatch: 'full' },
  { path: 'becoming-scam-proof', component: BecomingScamProofComponent, title: 'Becoming Scam Proof', pathMatch: 'full' },
  { path: 'indoor-air-and-your-health', component: IndoorAirAndYourHealthComponent, title: 'Indoor Air and Your Health', pathMatch: 'full' },
  { path: 'scam-alert', component: ScamAlertComponent, title: 'Scam Alert', pathMatch: 'full' },
  { path: 'request-quote', component: RequestQuoteComponent, title: 'Request Quote', pathMatch: 'full' },
  { path: 'asbestos', component: AsbestosComponent, title: 'Asbestos', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled'
      })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
