import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SecurityService} from "./services/security.service";
import {GreetingComponent} from "./login/greeting.component";
import {ThreatComponent} from "./threat/threat.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GreetingComponent,
    ThreatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
