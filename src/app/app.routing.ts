import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {GreetingComponent} from "./components/login/greeting.component";
import {ThreatComponent} from "./components/threat/threat.component";

// The routes.
const APP_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'greeting', component: GreetingComponent},
  {path: 'threat', component: ThreatComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/login'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
