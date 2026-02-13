import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Card } from '../../components/card/card';
import { Modal } from '../../components/modal/modal';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, Card, Modal, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  ngOnInit(): void {
    this.loadProducts();
  }
  constructor(
    private api: Api,
    private cdr: ChangeDetectorRef,
  ) {}

  productsList: Product[] = [];
  addProductModalVisible: boolean = false;

  showAddProductModal() {
    this.addProductModalVisible = true;
  }

  loadProducts() {
    this.api.getProducts().subscribe((data) => {
      this.productsList = data.items;
      this.cdr.detectChanges();
      console.log(data.items);
    });
  }
}
