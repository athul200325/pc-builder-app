import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-footer',
  imports: [DividerModule, ButtonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

}
