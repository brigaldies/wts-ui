import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {User} from "../domain/security/user";
import {Observable, AsyncSubject} from "rxjs";
import {SecurityContext} from "../domain/security/securitycontext";

@Injectable()
export class SecurityService {

  private authUrl: string = 'http://localhost:8080/api/login';

  private securityContext: SecurityContext = null;

  constructor(private http: Http) {
  }

  private logSecurityContext() {
    console.log(this.securityContext);
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
