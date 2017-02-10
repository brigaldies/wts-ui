import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {User} from "../domain/security/user";
import {Observable, AsyncSubject} from "rxjs";
import {SecurityContext} from "../domain/security/securitycontext";

@Injectable()
export class SecurityService {

  // TODO: Externalize the WTS Server's URL configuration
  private authUrl: string = 'http://localhost:8080/wts-server/api/login';

  private securityContext: SecurityContext = null;

  constructor(private http: Http) {
  }

  private logSecurityContext() {
    console.log(this.securityContext);
  }

  isLoggedIn(): boolean {
    return this.securityContext != null;
  }

  getUsername(): string{
    return this.securityContext ? this.securityContext.username : 'No user logged in!';
  }

  getUserRoles(): string[] {
    return this.securityContext ? this.securityContext.roles : [];
  }

  login(user: User): Observable<any> {
    console.log('SecurityService.login');
    console.log(user);

    let loginSubject: AsyncSubject<any> = new AsyncSubject();
    let loginResponse: boolean = false;

    this.http.post(this.authUrl, JSON.stringify(user))
      .map(response => response.json())
      .subscribe(
        response => {
          console.log('SecurityService.login: Success');
          console.log(response);
          loginResponse = true;
          this.securityContext = response;
          loginSubject.next(loginResponse);
          loginSubject.complete();
        },
        error => {
          console.log('SecurityService.login: Error');
          console.log(error);
          loginResponse = false;
          loginSubject.next(loginResponse);
          loginSubject.complete();
        }
        // TODO: Investigate why the final block is not called when there is a failure.
        // ,
        // () => {
        //   console.log('SecurityService.login: Final block');
        //   this.logSecurityContext();
        //   loginSubject.next(loginResponse);
        //   loginSubject.complete();
        // }
      );

    return loginSubject;
  }
}
