import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3000';

  getUserById(userId: number) {
    try {
      return this.http.get(`${this.baseUrl}/api/users/getUser/${userId}`);
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }

}
