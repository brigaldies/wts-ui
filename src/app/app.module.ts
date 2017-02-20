import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {HomeComponent} from "./components/home/home.component";
import {SecurityService} from "./services/security.service";
import {GreetingComponent} from "./components/login/greeting.component";
import {ThreatComponent} from "./components/threat/threat.component";
import {ThreatService} from "./services/threat.service";
import {SpinnerComponent} from "./components/spinner/spinner.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GreetingComponent,
    ThreatComponent,
    SpinnerComponent,
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCX7saNYe5929y6t8YQ0v2aEdX22g8kNjc'
    }),
    routing
  ],
  providers: [SecurityService, ThreatService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
