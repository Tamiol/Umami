import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

import * as AuthActions from 'src/app/modules/auth/store/auth.actions';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  name = '';

  constructor(private store: Store<AppState>) {}

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
