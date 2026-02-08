# PrimeNG Style Guide for PC Builder

This guide demonstrates how to implement PrimeNG components with consistent styling based on the existing pc-builder component design.

## Theme Configuration

The project uses PrimeNG's Aura theme with custom dark mode styling. The theme is configured in `app.config.ts`:

```typescript
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
```

## Custom Styling

All PrimeNG component customizations are in `src/styles/primeng-theme.css` and imported in `styles.css`.

## Design System

### Color Palette
- **Primary**: Cyan gradient (`rgb(6 182 212)` to `rgb(147 51 234)`)
- **Background**: Dark slate with glass morphism effect
- **Surface**: `rgb(51 65 85)` with backdrop blur
- **Border**: `rgb(75 85 99)`
- **Text**: White primary, `rgb(156 163 175)` secondary

### Typography
- **Headers**: Bold white text
- **Body**: Regular white text
- **Secondary**: Gray-400 for less important text

### Spacing
- **Padding**: 0.75rem to 1.5rem for components
- **Margins**: 0.5rem to 2rem for spacing
- **Border Radius**: 0.5rem to 0.75rem

## Component Examples

### 1. Form Components

#### Input Text
```html
<input 
  pInputText 
  placeholder="Enter text"
  [(ngModel)]="value"
  class="w-full">
```

#### Password
```html
<p-password 
  [(ngModel)]="password"
  placeholder="Enter password"
  [toggleMask]="true"
  [feedback]="true"
  styleClass="w-full">
</p-password>
```

#### Select/Dropdown
```html
<p-select 
  [(ngModel)]="selectedValue"
  [options]="options"
  placeholder="Select option"
  styleClass="w-full">
</p-select>
```

#### Checkbox
```html
<p-checkbox 
  [(ngModel)]="checked"
  binary="true"
  inputId="checkbox">
</p-checkbox>
```

### 2. Button Components

#### Primary Button
```html
<p-button 
  label="Primary Action"
  styleClass="w-full">
</p-button>
```

#### Secondary Button
```html
<p-button 
  label="Secondary Action"
  severity="secondary"
  styleClass="w-full">
</p-button>
```

#### Outlined Button
```html
<p-button 
  label="Outlined Action"
  outlined="true"
  styleClass="w-full">
</p-button>
```

### 3. Layout Components

#### Card
```html
<p-card>
  <ng-template pTemplate="header">
    <img src="image.jpg" alt="Header">
  </ng-template>
  
  <div class="space-y-3">
    <h3 class="text-white font-semibold">Card Title</h3>
    <p class="text-gray-400">Card content goes here</p>
  </div>
</p-card>
```

#### Divider
```html
<p-divider align="center">
  <span class="text-gray-400 text-sm">or continue with</span>
</p-divider>
```

### 4. Data Components

#### DataView with Grid/List Toggle
```html
<div class="flex border border-gray-600 rounded-lg overflow-hidden">
  <p-button 
    icon="pi pi-th-large"
    [severity]="layout === 'grid' ? 'primary' : 'secondary'"
    (onClick)="layout = 'grid'"
    [text]="layout !== 'grid'"
    size="small">
  </p-button>
  <p-button 
    icon="pi pi-list"
    [severity]="layout === 'list' ? 'primary' : 'secondary'"
    (onClick)="layout = 'list'"
    [text]="layout !== 'list'"
    size="small">
  </p-button>
</div>
```

#### Rating
```html
<p-rating 
  [(ngModel)]="rating" 
  [readonly]="true" 
  [cancel]="false">
</p-rating>
```

#### Tag
```html
<p-tag 
  [value]="tagValue"
  [severity]="getSeverity()"
  class="text-xs">
</p-tag>
```

### 5. Navigation Components

#### ScrollPanel
```html
<p-scrollPanel [style]="{'width': '100%', 'height': 'calc(100vh - 200px)'}">
  <!-- Content -->
</p-scrollPanel>
```

## Utility Classes

### Layout Classes
```css
.pc-builder-container {
  @apply min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900;
}

.pc-builder-card {
  @apply bg-slate-800/60 backdrop-blur-sm border border-gray-700 rounded-lg;
}

.pc-builder-card-hover {
  @apply hover:border-cyan-500 transition-colors cursor-pointer;
}

.pc-builder-glass {
  @apply bg-slate-800/80 backdrop-blur-sm border border-gray-700;
}
```

### Animated Background
```html
<div class="pc-builder-animated-bg">
  <div></div>
  <div></div>
  <div></div>
</div>
```

## Component Structure

### TypeScript Component
```typescript
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
// ... other PrimeNG imports

@Component({
  selector: 'app-example',
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    // ... other imports
  ],
  templateUrl: './example.html',
  styleUrl: './example.css',
})
export class ExampleComponent {
  // Component logic
}
```

### HTML Template Structure
```html
<div class="pc-builder-container">
  <!-- Animated Background -->
  <div class="pc-builder-animated-bg">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <!-- Main Content -->
  <div class="relative z-10 p-6">
    <!-- Content goes here -->
  </div>
</div>
```

## Best Practices

1. **Consistent Spacing**: Use Tailwind classes for consistent spacing
2. **Glass Morphism**: Apply backdrop-blur and transparency for modern look
3. **Hover Effects**: Add subtle hover animations for interactive elements
4. **Color Consistency**: Use the defined color palette throughout
5. **Responsive Design**: Ensure components work on all screen sizes
6. **Accessibility**: Include proper labels and ARIA attributes

## PrimeNG Components Used

- **Form**: InputText, Password, Select, Checkbox, RadioButton
- **Button**: Button with various severities and styles
- **Data**: DataView, Table, Paginator, Rating
- **Panel**: Card, Accordion, TabView
- **Overlay**: Dialog, Toast, Tooltip
- **Menu**: Menu, Menubar, ContextMenu
- **Misc**: Tag, Badge, ProgressBar, Divider

## File Structure

```
src/
├── styles/
│   └── primeng-theme.css          # PrimeNG customizations
├── app/
│   ├── components/
│   │   ├── login/
│   │   │   ├── login.component.ts
│   │   │   └── login-primeng.html
│   │   ├── register/
│   │   │   ├── register.component.ts
│   │   │   └── register-primeng.html
│   │   └── components-list/
│   │       ├── components-list.component.ts
│   │       └── components-list-primeng.html
│   └── app.config.ts             # PrimeNG theme configuration
└── styles.css                    # Global styles import
```

This style guide ensures consistent implementation of PrimeNG components across your PC Builder application while maintaining the existing dark theme and glass morphism design aesthetic.
