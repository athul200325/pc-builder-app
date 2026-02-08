import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule, ButtonModule, MenuModule, PanelMenuModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @Input() isOpen = false;

  menuItems = [
    {
      icon: '🏠',
      label: 'Home',
      route: '/',
      active: false
    },
    {
      icon: '🔧',
      label: 'Components',
      route: '/components',
      active: false,
      submenu: [
        { label: 'Processors (CPU)', route: '/components?category=cpu' },
        { label: 'Graphics Cards', route: '/components?category=gpu' },
        { label: 'Motherboards', route: '/components?category=motherboard' },
        { label: 'Memory (RAM)', route: '/components?category=ram' },
        { label: 'Storage', route: '/components?category=storage' },
        { label: 'Power Supplies', route: '/components?category=psu' },
        { label: 'Cases', route: '/components?category=cases' },
        { label: 'Cooling', route: '/components?category=cooling' }
      ]
    },
    {
      icon: '📋',
      label: 'Components List',
      route: '/components-list',
      active: false
    },
    {
      icon: '🖥️',
      label: 'Prebuild PCs',
      route: '/prebuild',
      active: false
    },
    {
      icon: '💰',
      label: 'Price Tracker',
      route: '/price-tracker',
      active: false
    },
    {
      icon: '🛠️',
      label: 'Build Guide',
      route: '/build-guide',
      active: false
    }
  ];

  expandedItems: Set<string> = new Set();

  toggleSubmenu(label: string) {
    if (this.expandedItems.has(label)) {
      this.expandedItems.delete(label);
    } else {
      this.expandedItems.add(label);
    }
  }

  isExpanded(label: string): boolean {
    return this.expandedItems.has(label);
  }
}