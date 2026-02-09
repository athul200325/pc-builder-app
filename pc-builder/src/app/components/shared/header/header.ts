import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonModule, MenubarModule, BadgeModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartItemCount = 3;
  userdata;

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    this.userdata = this.userService.user;
  }

  getProfilePic() {
    if (this.userdata() && this.userdata().profilePic) {
      return this.userdata().profilePic;
    }
    return 'https://cdn.vectorstock.com/i/preview-1x/63/42/avatar-photo-placeholder-icon-design-vector-30916342.jpg';
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
