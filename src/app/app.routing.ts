import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {GreetingComponent} from "./login/greeting.component";
import {ThreatComponent} from "./threat/threat.component";

// The routes.
const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'greeting', component: GreetingComponent},
  {path: 'threat', component: ThreatComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
