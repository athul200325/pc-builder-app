import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { UserService } from '../../services/user.service';
import { UserProfileDialog } from './user-profile-dialog/user-profile-dialog';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  imports: [
    CommonModule,
    AvatarModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    TableModule,
    TagModule,
    Header,
    Footer,
    UserProfileDialog
  ],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {
  userData;
  visible = false;

  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private router: Router
  ) {
    this.userData = this.userService.user;
  }

  pcBuilds = [
      {
        name: 'Gaming Beast',
        status: 'Complete',
        components: {
          cpu: 'Intel i7-13700K',
          gpu: 'RTX 4070 Ti',
          ram: '32GB DDR5'
        },
        totalPrice: 2299
      },
      {
        name: 'Work Station',
        status: 'In Progress',
        components: {
          cpu: 'AMD Ryzen 9 7900X',
          gpu: 'RTX 4060',
          ram: '64GB DDR5'
        },
        totalPrice: 1899
      },
      {
        name: 'Budget Build',
        status: 'Complete',
        components: {
          cpu: 'AMD Ryzen 5 5600X',
          gpu: 'RTX 3060',
          ram: '16GB DDR4'
        },
        totalPrice: 1299
      },
      {
        name: 'Streaming Rig',
        status: 'Complete',
        components: {
          cpu: 'Intel i9-13900K',
          gpu: 'RTX 4080',
          ram: '32GB DDR5'
        },
        totalPrice: 3199
      },
      {
        name: 'Mini ITX Build',
        status: 'Planning',
        components: {
          cpu: 'AMD Ryzen 7 7700X',
          gpu: 'RTX 4070',
          ram: '32GB DDR5'
        },
        totalPrice: 2599
      },
      {
        name: 'Server Build',
        status: 'Complete',
        components: {
          cpu: 'Intel Xeon E5-2690',
          gpu: 'Quadro P2000',
          ram: '128GB DDR4'
        },
        totalPrice: 4299
      }
    ]

  recentOrders = [
    { id: 'ORD-001', date: '2024-01-25', items: 3, total: 450, status: 'Delivered' },
    { id: 'ORD-002', date: '2024-01-20', items: 1, total: 299, status: 'Shipped' },
    { id: 'ORD-003', date: '2024-01-15', items: 5, total: 1200, status: 'Processing' }
  ]

  ngOnInit() {
    console.log('User data loaded:', this.userData());
  }

  getOrderStatusSeverity(status: string): 'success' | 'info' | 'warn' | 'danger' | 'secondary' | 'contrast' {
    switch (status) {
      case 'Delivered': return 'success';
      case 'Shipped': return 'info';
      case 'Processing': return 'warn';
      default: return 'secondary';
    }
  }

  scrollBuilds(direction: 'left' | 'right') {
    const container = document.querySelector('.builds-scroll-container');
    if (container) {
      const scrollAmount = 320;
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  }

  getProfilePic() {
    if (this.userData() && this.userData().profilePic) {
      return this.userData().profilePic;
    }
    return 'https://cdn.vectorstock.com/i/preview-1x/63/42/avatar-photo-placeholder-icon-design-vector-30916342.jpg';
  }

  editProfile() {
    this.visible = true;
  }

  logOut() {
    this.tokenService.removeToken();
    localStorage.removeItem('userId');
    this.userService.clearUser();
    this.router.navigate(['/login']);
  }
}

