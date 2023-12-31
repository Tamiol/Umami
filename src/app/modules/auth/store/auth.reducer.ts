import { createReducer, Action, on } from '@ngrx/store';
import { User } from '../../core/models/auth.model';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}
const initailState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const _authReducer = createReducer(
  initailState,
  on(AuthActions.login, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.loginSuccess, (state, action) => ({
    ...state,
    loading: false,
    user: new User(action.user.login, action.user.email, action.user.role),
    error: null,
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(AuthActions.logout, (state, action) => ({
    ...state,
  })),
  on(AuthActions.logoutSuccess, (state, action) => ({
    ...state,
    user: null,
    error: null,
  })),
  on(AuthActions.loginFailure, (state, action) => ({
    ...state,
  })),
  on(AuthActions.register, (state, action) => ({
    ...state,
    loading: true,
  })),
  on(AuthActions.registerSuccess, (state, action) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(AuthActions.registerFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  })),
  on(AuthActions.clearError, (state, action) => ({
    ...state,
    error: null,
  })),
  on(AuthActions.autoLogin, (state, action) => ({
    ...state,
  })),
  on(AuthActions.autoLoginSuccess, (state, action) => ({
    ...state,
    user: new User(action.user.login, action.user.email, action.user.role),
  })),
  on(AuthActions.autoLoginFailure, (state, action) => ({
    ...state,
  }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
