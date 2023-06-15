import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   //https://localhost:44305/
  private baseUrl = 'api/Identity';

  constructor(
    private http: HttpClient,
    private tokenHelper: JwtHelperService
    ) {}
  userDetails(id:string){
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  login(username:string,password:string): Observable<any> {
    return this.http.post<any>(this.baseUrl+"/Login", {Username:username, Password:password}).pipe(
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

  getToken(): string | null  {
    return localStorage.getItem('token') || null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }
  getTokenInformation(){
    if(this.isAuthenticated()){
      return this.tokenHelper.decodeToken(this.getToken() || '') || null;
    }
    return null;
  }
}