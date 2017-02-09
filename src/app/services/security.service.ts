import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {User} from "../domain/security/user";
import {Observable} from "rxjs";

@Injectable()
export class SecurityService {

  private authUrl: string = 'http://localhost:8080/wts-server-0.1/api/login';

  constructor(private http: Http) {
  }

  login(user: User): Observable<any> {
    console.log('SecurityService.login');
    console.log(user);

    return this.http.post(this.authUrl, JSON.stringify(user))
      .map(response => response.json());
  }
}
