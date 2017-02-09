import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

// The routes.
const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);