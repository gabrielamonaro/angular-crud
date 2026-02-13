import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-product-form',
  imports: [InputTextModule, ButtonModule, RatingModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
  standalone: true,
})
export class ProductForm {
  constructor(private api: Api) {}
  @Input() isEdition: boolean = false;
  @Input() product = {
    id: '',
    name: '',
    price: 0,
    image: '',
    rating: 0,
  };

  submitForm() {
    if (this.isEdition) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    this.api.createProduct(this.product).subscribe((data) => {});
  }

  updateProduct() {
    this.api.updateProduct({ ...this.product }).subscribe((data) => {});
  }
}
