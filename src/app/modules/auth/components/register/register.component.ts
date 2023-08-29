import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegisterForm } from 'src/app/modules/core/models/forms.model';
import { FormService } from 'src/app/modules/core/services/form.service';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from 'src/app/modules/auth/store/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnDestroy {
  registerForm: FormGroup<RegisterForm> = this.formService.initRegisterForm();

  constructor(
    private formService: FormService,
    private store: Store<AppState>
  ) {}

  ngOnDestroy(): void {
    this.store.dispatch(AuthActions.clearError());
  }

  get controls() {
    return this.registerForm.controls;
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }

  onRegister() {
    const { login, email, password, repeatedPassword } =
      this.registerForm.getRawValue();

    this.store.dispatch(
      AuthActions.register({ registerData: { login, email, password } })
    );
  }
}
