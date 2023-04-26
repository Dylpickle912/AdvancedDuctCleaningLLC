import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Advanced Duct Cleaning LLC', pathMatch: 'full' },
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
