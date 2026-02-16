import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { Modal } from '../modal/modal';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Api } from '../../services/api';

@Component({
  selector: 'app-card',
  imports: [Button, CardModule, RatingModule, Modal, FormsModule, DialogModule],
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class Card {
  constructor(private api: Api) {}
  @Input() isEdition!: boolean;
  editProductModalVisible: boolean = false;
  deleteModalVisible = false;
  @Output() saved = new EventEmitter<void>();

  selectedProduct: Product = {
    id: '',
    image: '',
    name: '',
    price: 0,
    rating: 0,
  };

  @Input() product: Product = {
    id: '',
    image: '',
    name: '',
    price: 0,
    rating: 0,
  };

  showEditProductModal() {
    this.selectedProduct = { ...this.product };
    this.editProductModalVisible = true;
  }

  showDeleteModal() {
    this.deleteModalVisible = true;
  }

  closeDeleteModal() {
    this.deleteModalVisible = false;
  }

  emitSaved() {
    this.saved.emit();
  }

  async deleteProduct() {
    await this.api.deleteProduct(this.product.id);
  }
}
