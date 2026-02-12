import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ButtonModule, RouterLink, RouterModule],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.css',
})
export class Header {}
