import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from "../shared/header/header";
import { Footer } from "../shared/footer/footer";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ApiService } from '../../services/api.service';
import { ToastService } from '../../services/toast.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-homePage',
  imports: [CommonModule, FormsModule, Header, Footer, ButtonModule, CardModule, TagModule, RatingModule, BadgeModule, InputTextModule, SelectModule,],
  templateUrl: './homePage.html',
  styleUrl: './homePage.css',
})
export class homePage {

  UserId = 0;

  constructor(
    private apiService: ApiService,
    private toast: ToastService,
    private userService: UserService
  ) {
    this.userdata = this.userService.user;
    
    effect(() => {
      console.log('User data changed:', this.userdata());
    });
  }

  userdata: any = null;

  categories = [
    { name: 'Processors (CPU)', icon: '⚡', count: 156 },
    { name: 'Graphics Cards (GPU)', icon: '🎮', count: 89 },
    { name: 'Motherboards', icon: '🔧', count: 234 },
    { name: 'Memory (RAM)', icon: '💾', count: 78 },
    { name: 'Storage (SSD/HDD)', icon: '💿', count: 145 },
    { name: 'Power Supplies', icon: '🔋', count: 67 },
    { name: 'Cases', icon: '📦', count: 123 },
    { name: 'Cooling', icon: '❄️', count: 98 }
  ];

  components = [
    {
      id: 1,
      name: 'Intel Core i7-13700K',
      category: 'CPU',
      price: 409.99,
      image: 'https://via.placeholder.com/200x150',
      rating: 4.8,
      reviews: 1247,
      inStock: true
    },
    {
      id: 2,
      name: 'NVIDIA RTX 4070 Ti',
      category: 'GPU',
      price: 799.99,
      image: 'https://via.placeholder.com/200x150',
      rating: 4.9,
      reviews: 892,
      inStock: true
    },
    {
      id: 3,
      name: 'ASUS ROG Strix Z790-E',
      category: 'Motherboard',
      price: 449.99,
      image: 'https://via.placeholder.com/200x150',
      rating: 4.7,
      reviews: 456,
      inStock: false
    },
    {
      id: 4,
      name: 'Corsair Vengeance 32GB DDR5',
      category: 'RAM',
      price: 189.99,
      image: 'https://via.placeholder.com/200x150',
      rating: 4.6,
      reviews: 678,
      inStock: true
    }
  ];

  ngOnInit() {
    console.log('User data:', this.userdata());
  }
}
