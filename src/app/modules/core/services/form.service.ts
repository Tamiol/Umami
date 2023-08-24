import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm, RegisterForm } from '../models/forms.model';
import { equivalentValidator } from '../../shared/validators/equivalent.validator';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  initLoginForm(): FormGroup<LoginForm> {
    return new FormGroup({
      login: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(50),
        ],
        nonNullable: true,
      }),
    });
  }

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength']?.requiredLength} characters`;
    }
    if (control.hasError('maxlength')) {
      return `Maximum length is ${control.errors?.['maxlength']?.requiredLength} characters`;
    }
    if (control.hasError('email')) {
      return `Invalid email`;
    }
    if (control.hasError('passwordsNotEquals')) {
      return `Passwords must be the same`;
    }
    return '';
  }

  initRegisterForm(): FormGroup<RegisterForm> {
    return new FormGroup(
      {
        login: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
          nonNullable: true,
        }),
        email: new FormControl('', {
          validators: [Validators.required, Validators.email],
          nonNullable: true,
        }),
        password: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(50),
          ],
          nonNullable: true,
        }),
        repeatedPassword: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(50),
          ],
          nonNullable: true,
        }),
      },
      { validators: [equivalentValidator('password', 'repeatedPassword')] }
    );
  }
}
