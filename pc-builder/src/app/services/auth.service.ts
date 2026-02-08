import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';
  

  login(email: string, password: string) {
    const params = { email, password };
    try {
      return this.http.post(`${this.baseUrl}/api/users/login`, params);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }
}
