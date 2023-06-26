import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserTokenInfo } from '../models/login/user-token-info';
import { UserDetails } from '../models/login/user-details';


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
    
  getUserDetails(id:string | null) : Observable<UserDetails>{
    return this.http.post<UserDetails>(`${this.baseUrl}/UserDetails/${id}`, null);
  }
  getLoggedUsername() : string | undefined {
    return localStorage.getItem('username') || undefined;
  }

  login(username:string,password:string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl+"/Login", {Username:username, Password:password}).pipe(
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
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('username');
  }
  getLoggedUserId(): string | null {
    return localStorage.getItem('id') || null;
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

  getFavouriteProducts(Id:string | null): Observable<any>  {
    return this.http.post<any>(this.baseUrl+'/GetUserFavouriteProducts/',{userId: Id})
  }
}