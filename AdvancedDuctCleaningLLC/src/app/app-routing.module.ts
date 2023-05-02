import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NgModule} from "@angular/core";
import {OurCompanyComponent} from "./pages/our-company/our-company.component";
import {StepsComponent} from "./pages/steps/steps.component";
import {BeforeAndAfterComponent} from "./pages/before-and-after/before-and-after.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Advanced Duct Cleaning LLC', pathMatch: 'full' },
  { path: 'our-company', component: OurCompanyComponent, title: 'Our Company', pathMatch: 'full' },
  { path: 'steps', component: StepsComponent, title: 'Steps to a Professional Air Duct Cleaning', pathMatch: 'full' },
  { path: 'before-and-after', component: BeforeAndAfterComponent, title: 'Before and After', pathMatch: 'full' },
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
