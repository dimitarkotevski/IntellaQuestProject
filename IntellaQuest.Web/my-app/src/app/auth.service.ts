import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserLogin } from './models/login/login-user';
import { LoginToken } from './models/token';

@Injectable()
export class AuthService {
  private baseUrl = 'https://localhost:44305/identity';

  constructor(private http: HttpClient) {}

  login(model:UserLogin): Observable<any> {
    return this.http.post<LoginToken>(`${this.baseUrl}/login`, model).pipe(
      map(response => {
        if (response.success && response.token) {
          localStorage.setItem('token', response.token);
        }
        return response.success;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }
}