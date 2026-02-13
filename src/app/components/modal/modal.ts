import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProductForm } from '../product-form/product-form';

@Component({
  selector: 'app-modal',
  imports: [ButtonModule, DialogModule, ProductForm],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss'],
  standalone: true,
})
export class Modal {
  @Input() isEdition!: boolean;
  @Input() visible!: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() product: Product = {
    id: '',
    image: '',
    name: '',
    price: 0,
    rating: 0,
  };

  @Input() title!: string;

  onSubmit: boolean = false;

  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  save(form: ProductForm) {
    form.submitForm();
    this.onClose();
  }
}
