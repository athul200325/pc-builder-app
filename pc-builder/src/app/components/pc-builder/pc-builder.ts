import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Header } from '../shared/header/header';
import { Footer } from '../shared/footer/footer';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-pc-builder',
  imports: [CommonModule, FormsModule, Footer, Header, ButtonModule, InputTextModule, SelectModule, CardModule, ScrollPanelModule],
  templateUrl: './pc-builder.html',
  styleUrl: './pc-builder.css',
})
export class PcBuilder {
  categories = [
    { name: 'CPU', icon: '⚡', components: ['Intel i7-13700K', 'AMD Ryzen 7 7700X'] },
    { name: 'GPU', icon: '🎮', components: ['RTX 4070 Ti', 'RX 7800 XT'] },
    { name: 'Motherboard', icon: '🔧', components: ['ASUS ROG Strix', 'MSI Gaming Pro'] },
    { name: 'RAM', icon: '💾', components: ['Corsair 32GB DDR5', 'G.Skill 16GB DDR5'] },
    { name: 'Storage', icon: '💿', components: ['Samsung 980 Pro 1TB', 'WD Black SN850X'] },
    { name: 'PSU', icon: '🔋', components: ['Corsair RM850x', 'EVGA SuperNOVA'] },
    { name: 'Case', icon: '📦', components: ['Fractal Design', 'NZXT H7'] },
    { name: 'Cooling', icon: '❄️', components: ['Noctua NH-D15', 'Corsair H150i'] }
  ];

  selectedCategory = 'All';
  searchTerm = '';
  buildName = 'Untitled-Pc-Build';
  
  get categoryOptions() {
    return [
      { label: 'All Categories', value: 'All' },
      ...this.categories.map(cat => ({ label: cat.name, value: cat.name }))
    ];
  }
}
