import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAuthUser } from 'src/app/modules/auth/store/auth.selectors';
import { AppState } from 'src/app/store/app.reducer';
import { User } from '../models/auth.model';

export const authActivateGuard: CanActivateFn = (route, state) => {
  const isLoggedIn$: Observable<User | null> = inject(Store<AppState>).select(
    selectAuthUser
  );

  var isUserLoggedIn = true;

  isLoggedIn$.subscribe({
    next: (user) => {
      isUserLoggedIn = !!user;
    },
  });
  console.log(isLoggedIn$);

  return isUserLoggedIn ? true : inject(Router).createUrlTree(['/login']);
};
