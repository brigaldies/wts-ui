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
  selectedThreat: Threat = null

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

  /**
   * Threat selection.
   */
  onClick(threat: Threat) {
    this.selectedThreat = threat;
    console.log(this.selectedThreat);
  }

  /**
   * Is a post currently selected/active?
   */
  isActive(threatIndex: number) {
    return this.selectedThreat != null && this.threats[threatIndex] == this.selectedThreat;
  }

  clickedMarker() {
    console.log('clickedMarker');
  }
}
