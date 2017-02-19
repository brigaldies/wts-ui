import {Threat} from "./threat";
export class LocationThreat {
  constructor(public city: string,
              public threats: Threat[]) {
  }
}
