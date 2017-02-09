import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SecurityService} from "../services/security.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private securityService: SecurityService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('LoginComponent.onSubmit()');
    console.log(this.loginForm.value);
    this.securityService.login(this.loginForm.value)
      .subscribe(response => {
        console.log(response);
      });
  }
}
