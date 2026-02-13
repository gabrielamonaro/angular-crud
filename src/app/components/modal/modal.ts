import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProductForm } from '../add-product-form/product-form';

@Component({
  selector: 'app-modal',
  imports: [ButtonModule, DialogModule, ProductForm],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  standalone: true,
})
export class Modal {
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() title!: string;

  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
