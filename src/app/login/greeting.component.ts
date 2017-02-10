import {Component, OnInit} from "@angular/core";
import {SecurityService} from "../services/security.service";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor(private securityService: SecurityService) {
  }

  ngOnInit() {
  }
}
