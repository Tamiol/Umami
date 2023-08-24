import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm = this.formService.initRegisterForm();

  constructor(private formService: FormService) {}

  get controls() {
    return this.registerForm.controls;
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }
}
