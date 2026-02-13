import { Component, Input } from '@angular/core';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { Modal } from '../modal/modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [Button, CardModule, RatingModule, Modal, FormsModule],
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class Card {
  editProductModalVisible: boolean = false;
  @Input() product: Product = {
    id: '',
    image: '',
    name: '',
    price: 0,
    rating: 0,
  };

  showEditProductModal() {
    this.editProductModalVisible = true;
  }
}
