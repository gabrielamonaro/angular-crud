import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  imports: [InputTextModule, ButtonModule, RatingModule, FormsModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.scss',
  standalone: true,
})
export class ProductForm {
  product = {
    name: '',
    price: 0,
    image: '',
    rating: 0,
  };
  submitForm() {
    console.log('Dados do formulário: ', this.product);
  }
}
