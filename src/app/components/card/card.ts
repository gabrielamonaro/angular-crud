import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { Modal } from '../modal/modal';

@Component({
  selector: 'app-card',
  imports: [Button, CardModule, RatingModule, Modal],
  standalone: true,
  templateUrl: './card.html',
  styleUrls: ['./card.scss'],
})
export class Card {
  editProductModalVisible: boolean = false;

  showEditProductModal() {
    this.editProductModalVisible = true;
  }
}
