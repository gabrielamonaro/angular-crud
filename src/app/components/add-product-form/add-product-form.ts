import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-add-product-form',
  imports: [InputTextModule, ButtonModule, RatingModule],
  templateUrl: './add-product-form.html',
  styleUrl: './add-product-form.scss',
})
export class AddProductForm {
  @Input() onClose!: () => void;
}
