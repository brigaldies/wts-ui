import {Component, OnInit} from "@angular/core";
import {ThreatService} from "../../services/threat.service";
import {Threat} from "../../domain/threat/threat";

@Component({
  selector: 'app-threat',
  templateUrl: 'threat.component.html',
  styleUrls: ['threat.component.css']
})
export class ThreatComponent implements OnInit {

  isLoading: Boolean = true;
  threats: Threat[] = []

  constructor(private threatService: ThreatService) {
  }

  ngOnInit() {
    console.log('ThreatComponent: ngOnInit');

    // Retrieve the active threats
    this.threatService.getThreats()
      .subscribe(
        result => {
          //console.log(result);
          this.threats = result;
        },
        error => {
          console.log(error);
          this.isLoading = false;
        },
        () => {
          console.log((this.threats) ? this.threats.length : 0 + ' threats loaded.');
          this.isLoading = false;
        }
      )
  }
}
