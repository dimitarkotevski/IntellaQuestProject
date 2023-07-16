import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenInfo } from '../models/login/user-token-info';
import { UserDetails } from '../models/login/user-details';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private baseApi = 'api/Identity';

  constructor(
    private http: HttpClient,
    private tokenHelper: JwtHelperService
    ) {}
    
  GetUserDetails(id:string | null) : Observable<UserDetails>{
    return this.http.post<UserDetails>(`${this.baseApi}/UserDetails/${id}`, null);
  }
  GetLoggedUsername() : string | undefined {
    return localStorage.getItem('username') || undefined;
  }

  Login(username:string,password:string): Observable<boolean> {
    return this.http.post<any>(this.baseApi+"/Login", {Username:username, Password:password}).pipe(
      map((response : UserTokenInfo) => {
        if (response.Id && response.Token && response.Username) {
          localStorage.setItem('id', response.Id);
          localStorage.setItem('username', response.Username);
          localStorage.setItem('token', response.Token);
          return true;
        }
        return false;
      })
    );
  }
  Logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
  }
  GetLoggedUserId(): string | null {
    return localStorage.getItem('id') || null;
  }
  GetToken(): string | null  {
    return localStorage.getItem('token') || null;
  }

  IsAuthenticated(): boolean {
    const token = this.GetToken();
    return token !== null;
  }
  getTokenInformation(){
    if(this.IsAuthenticated()){
      return this.tokenHelper.decodeToken(this.GetToken() || '') || null;
    }
    return null;
  }

  RegisterUser(){
    
  }



}