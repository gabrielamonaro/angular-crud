import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-about',
  imports: [FieldsetModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {}
