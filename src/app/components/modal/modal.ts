import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-modal',
  imports: [ButtonModule, DialogModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  standalone: true,
})
export class Modal {
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  onClose() {
    this.visibleChange.emit(false);
  }
}
