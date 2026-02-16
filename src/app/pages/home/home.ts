import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Card } from '../../components/card/card';
import { Modal } from '../../components/modal/modal';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, Card, Modal, CommonModule, PaginatorModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home implements OnInit {
  first: number = 1;
  rows: number = 10;
  currentPage: number = 0;
  totalRecords: number = 0;
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

  async loadProducts() {
    try {
      const result = await this.api.getProducts({ page: this.currentPage, perPage: this.rows });

      this.productsList = result.items;
      this.cdr.detectChanges();
      this.totalRecords = result.total;
    } catch (error) {
      console.log('err :', error);
    }
  }

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
    this.currentPage = event.page ?? 0;
    this.loadProducts();
  }
}
