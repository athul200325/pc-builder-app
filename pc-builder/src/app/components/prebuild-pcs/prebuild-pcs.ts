import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-prebuild-pcs',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    Footer,
    ButtonModule,
    CardModule,
    TagModule,
    RatingModule,
    BadgeModule,
    InputTextModule,
    SelectModule
  ],
  templateUrl: './prebuild-pcs.html',
  styleUrl: './prebuild-pcs.css'
})
export class PrebuildPcs {
  searchTerm = '';
  selectedCategory = '';
  sortBy = 'name';

  categories = [
    { name: 'Gaming', icon: '🎮', count: 45 },
    { name: 'Workstation', icon: '💼', count: 23 },
    { name: 'Budget', icon: '💰', count: 67 },
    { name: 'High-End', icon: '⚡', count: 34 },
    { name: 'Streaming', icon: '📹', count: 28 },
    { name: 'Content Creation', icon: '🎨', count: 19 }
  ];

  prebuildPcs = [
    {
      id: 1,
      name: 'Gaming Beast RTX 4080',
      category: 'Gaming',
      price: 2499,
      originalPrice: 2799,
      image: 'https://via.placeholder.com/400x300',
      inStock: true,
      reviews: 156,
      rating: 4.8,
      specs: ['Intel i7-13700K', 'RTX 4080', '32GB DDR5', '1TB NVMe SSD'],
      features: ['RGB Lighting', 'Liquid Cooling', '3 Year Warranty']
    },
    {
      id: 2,
      name: 'Workstation Pro Max',
      category: 'Workstation',
      price: 3299,
      originalPrice: 3599,
      image: 'https://via.placeholder.com/400x300',
      inStock: true,
      reviews: 89,
      rating: 4.9,
      specs: ['Intel i9-13900K', 'RTX 4070 Ti', '64GB DDR5', '2TB NVMe SSD'],
      features: ['Professional Support', 'ECC Memory', '5 Year Warranty']
    },
    {
      id: 3,
      name: 'Budget Builder Starter',
      category: 'Budget',
      price: 899,
      originalPrice: 1099,
      image: 'https://via.placeholder.com/400x300',
      inStock: false,
      reviews: 234,
      rating: 4.5,
      specs: ['AMD Ryzen 5 7600', 'RTX 4060', '16GB DDR5', '500GB NVMe SSD'],
      features: ['Great Value', 'Upgrade Ready', '2 Year Warranty']
    },
    {
      id: 4,
      name: 'Streaming Studio Elite',
      category: 'Streaming',
      price: 1899,
      originalPrice: 2199,
      image: 'https://via.placeholder.com/400x300',
      inStock: true,
      reviews: 167,
      rating: 4.7,
      specs: ['AMD Ryzen 7 7700X', 'RTX 4070', '32GB DDR5', '1TB NVMe SSD'],
      features: ['Stream Optimized', 'Capture Card', '3 Year Warranty']
    }
  ];

  sortOptions = [
    { label: 'Name A-Z', value: 'name' },
    { label: 'Price Low-High', value: 'price-asc' },
    { label: 'Price High-Low', value: 'price-desc' },
    { label: 'Rating', value: 'rating' },
    { label: 'Most Popular', value: 'reviews' }
  ];

  filterByCategory(category: string) {
    this.selectedCategory = this.selectedCategory === category ? '' : category;
  }

  get filteredPcs() {
    let filtered = this.prebuildPcs;
    
    if (this.selectedCategory) {
      filtered = filtered.filter(pc => pc.category === this.selectedCategory);
    }
    
    if (this.searchTerm) {
      filtered = filtered.filter(pc => 
        pc.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        pc.category.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    return filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        case 'reviews': return b.reviews - a.reviews;
        default: return a.name.localeCompare(b.name);
      }
    });
  }

  getSeverity(inStock: boolean) {
    return inStock ? 'success' : 'danger';
  }

  getStockText(inStock: boolean) {
    return inStock ? 'In Stock' : 'Out of Stock';
  }

  getDiscount(price: number, originalPrice: number) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }
}
