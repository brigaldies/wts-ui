import {Address} from "../organization/address";
export class Threat {
  constructor(public organization: string,
              public threatSeverity: string,
              public threatType: string,
              public temperatureAlert: number,
              public assetType: string,
              public assetAddress: Address,
              public threatDateBegin: string,
              public threatDateEnd: string,
              public threatQuery: string) {
  }
}
