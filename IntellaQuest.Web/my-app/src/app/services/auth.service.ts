// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
   //https://localhost:44305/
//   private baseUrl = 'api/Identity';

//   constructor(private http: HttpClient) {}

//   login(username:string,password:string) {
//     return this.http.post<any>(this.baseUrl+"/Login", JSON)
//   }
//   logout(): void {
//     localStorage.removeItem('token');
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   isAuthenticated(): boolean {
//     const token = this.getToken();
//     return token !== null;
//   }
// }