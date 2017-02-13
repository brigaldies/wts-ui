import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {SecurityService} from "./security.service";
import {Threat} from "../domain/threat/threat";

@Injectable()
export class ThreatService {

  // When deployed in Tomcat
  // private threatsUrl: string = '/wts-server/api/threats';

  // When running from IntelliJ
  private threatsUrl: string = 'http://localhost:8080/api/threats';

  constructor(private http: Http,
              private securityService: SecurityService) {
  }

  /**
   * Retrieve the active threats.
   */
  getThreats(): Observable<Threat[]> {
    // console.log(this.securityService);
    let securityToken = this.securityService.securityContext ? this.securityService.securityContext.access_token : '';
    // console.log('Using security token ' + securityToken);
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + securityToken);
    // console.log(headers);
    console.log('Calling ' + this.threatsUrl);
    return this.http.get(this.threatsUrl, {headers: headers})
      .map(response => response.json().threats);
  }
}
