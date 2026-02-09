import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000';
  public user = signal<any>(null);

  constructor(private http: HttpClient) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage() {
    const userId = localStorage.getItem('userId');
    console.log('Loading user, userId:', userId);
    if (userId) {
      this.getUserById(userId).subscribe({
        next: (userData: any) => {
          console.log('API response:', userData);
          this.user.set(userData.data[0]);
          console.log('User set to:', this.user());
        },
        error: (err) => {
          console.error('Error loading user:', err);
          localStorage.removeItem('auth_token');
          localStorage.removeItem('userId');
        }
      });
    }
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/users/getUser/${userId}`);
  }

  setUser(userData: any) {
    this.user.set(userData.data[0]);
  }

  clearUser() {
    this.user.set(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('userId');
  }
}
