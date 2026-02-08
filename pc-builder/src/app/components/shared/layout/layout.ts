import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Header } from '../header/header';
import { filter } from 'rxjs/operators';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterModule, Sidebar, ButtonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  isSidebarOpen = false;
  isMobile = false;
  showSidebar = false;
  showHeader = true;

  constructor(private router: Router) {
    this.checkScreenSize();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showSidebar = event.url === '/components-list';
      this.showHeader = event.url !== '/' && !event.url.includes('/login') && !event.url.includes('/register') && event.url !== '/components-list';
      if (this.showSidebar && !this.isMobile) {
        this.isSidebarOpen = true;
      } else {
        this.isSidebarOpen = false;
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 1024;
    if (!this.isMobile && this.showSidebar) {
      this.isSidebarOpen = true;
    }
  }

  toggleSidebar() {
    if (this.showSidebar) {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }

  closeSidebar() {
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}