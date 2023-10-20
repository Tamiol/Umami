import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AuthResponse,
  IUser,
  LoginData,
  RegisterData,
} from '../models/auth.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(body: LoginData): Observable<IUser> {
    return this.http.post<IUser>(`${this.apiUrl}/login`, body, {
      withCredentials: true,
    });
  }

  logout(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/logout`, null, {
      withCredentials: true,
    });
  }

  register(body: RegisterData): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, body);
  }
}
