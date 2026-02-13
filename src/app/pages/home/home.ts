import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Card } from '../../components/card/card';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, Card, Modal],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  addProductModalVisible: boolean = false;

  showAddProductModal() {
    this.addProductModalVisible = true;
  }
}
