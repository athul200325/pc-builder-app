import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messageService: MessageService) {}

  showToast(message: string) {
    this.messageService.add({
      severity: 'success',
      detail: message
    });
  }

  showError(message: string) {
    this.messageService.add({
      severity: 'error',
      detail: message
    });
  }
}
