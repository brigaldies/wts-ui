import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SecurityService} from "../../services/security.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  loginInProcess: boolean = false;
  loginFailed: boolean = false;
  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private securityService: SecurityService,
              private router: Router) {
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
    this.loginInProcess = true;
    this.securityService.login(this.loginForm.value)
      .subscribe(
        result => {
          console.log(result);

          // TODO: 1) Stop the spinner; 2) Navigate.
          if (result) {
            // Success: Greet the logged in user.
            this.router.navigate(['/greeting']);
          } else {
            this.loginFailed = true;
          }

          this.loginInProcess = false;
        }
      );
  }

  keyup(event) {
    this.loginFailed = false;
  }

}
