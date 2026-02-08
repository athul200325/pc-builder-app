import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ButtonModule, MenubarModule, BadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartItemCount = 3; // This would come from a cart service

  constructor(private router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToCart() {
    this.router.navigate(['/cart']);
  }
}
