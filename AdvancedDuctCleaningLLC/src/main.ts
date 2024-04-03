import {environment} from "./environments/environment";
import {enableProdMode, importProvidersFrom} from "@angular/core";
import {bootstrapApplication, BrowserModule, HammerModule} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {appRoutes} from "./app/app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpClientModule} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {LocationStrategy, PathLocationStrategy} from "@angular/common";

if (environment.production) enableProdMode();

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      FormsModule,
      BrowserAnimationsModule,
      HammerModule,
      MatExpansionModule,
      ReactiveFormsModule,
      MatInputModule,
      MatSelectModule,
      MatFormFieldModule,
      HttpClientModule
    ),
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
    provideRouter(appRoutes)
  ]
}).catch(err => console.error(err));
