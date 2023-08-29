import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from 'src/app/modules/auth/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup<LoginForm> = this.formService.initLoginForm();

  get controls() {
    return this.loginForm.controls;
  }

  constructor(
    private formService: FormService,
    private store: Store<AppState>
  ) {}

  ngOnDestroy(): void {
    this.store.dispatch(AuthActions.clearError());
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }

  onLogin() {
    this.store.dispatch(
      AuthActions.login({ loginData: this.loginForm.getRawValue() })
    );
  }
}
