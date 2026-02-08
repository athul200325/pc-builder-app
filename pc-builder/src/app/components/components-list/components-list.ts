import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { BadgeModule } from 'primeng/badge';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';

@Component({
  selector: 'app-components-list',
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    SelectModule,
    CardModule,
    TagModule,
    RatingModule,
    BadgeModule,
    Header,
    Footer
  ],
  templateUrl: './components-list.html',
  styleUrl: './components-list.css'
})
export class ComponentsList {
  categories = [
    { name: 'CPU', count: 156, icon: '⚡' },
    { name: 'GPU', count: 89, icon: '🎮' },
    { name: 'Motherboard', count: 124, icon: '🔧' },
    { name: 'RAM', count: 78, icon: '💾' },
    { name: 'Storage', count: 203, icon: '💿' },
    { name: 'PSU', count: 67, icon: '🔋' },
    { name: 'Cooling', count: 145, icon: '❄️' },
    { name: 'Case', count: 92, icon: '📦' },
    { name: 'Monitor', count: 134, icon: '🖥️' },
    { name: 'Keyboard', count: 87, icon: '⌨️' },
    { name: 'Mouse', count: 65, icon: '🖱️' },
    { name: 'Headset', count: 43, icon: '🎧' },
    { name: 'Webcam', count: 29, icon: '📹' },
    { name: 'Speakers', count: 38, icon: '🔊' }
  ];

  components = [
    {
      id: 1,
      name: 'Intel Core i9-13900K',
      category: 'CPU',
      price: 589,
      inStock: true,
      reviews: 234,
      rating: 4.8
    },
    {
      id: 2,
      name: 'NVIDIA RTX 4080',
      category: 'GPU',
      price: 1199,
      inStock: true,
      reviews: 156,
      rating: 4.9
    },
    {
      id: 3,
      name: 'ASUS ROG Strix Z790-E',
      category: 'Motherboard',
      price: 449,
      inStock: false,
      reviews: 89,
      rating: 4.7
    }
  ];

  selectedCategory = '';
  searchTerm = '';

  filterByCategory(category: string) {
    this.selectedCategory = this.selectedCategory === category ? '' : category;
  }

  get filteredComponents() {
    let filtered = this.components;
    
    if (this.selectedCategory) {
      filtered = filtered.filter(c => c.category === this.selectedCategory);
    }
    
    if (this.searchTerm) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }

  getSeverity(inStock: boolean) {
    return inStock ? 'success' : 'danger';
  }

  getStockText(inStock: boolean) {
    return inStock ? 'In Stock' : 'Out of Stock';
  }

  allComponents() {
    this.selectedCategory = '';
  }

  scrollLeft() {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  }

  scrollRight() {
    const container = document.getElementById('categories-container');
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  }
}
