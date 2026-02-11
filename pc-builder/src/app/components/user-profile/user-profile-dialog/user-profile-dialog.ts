import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-profile-dialog',
  imports: [CommonModule, DialogModule, InputTextModule, ButtonModule],
  templateUrl: './user-profile-dialog.html',
  styleUrl: './user-profile-dialog.css',
})
export class UserProfileDialog {
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() userData: any = {};
  

  editData: any = {};

  onHide() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
  
  onSave() {}
}
