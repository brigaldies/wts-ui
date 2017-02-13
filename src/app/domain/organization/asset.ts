import {Organization} from "./organization";
import {Address} from "./address";
export class Asset {
  constructor(public organization: Organization,
              public assetType: string,
              public address: Address,
              public temperatureThresholdLow: number,
              public temperatureThresholdHigh: number) {
  }
}
