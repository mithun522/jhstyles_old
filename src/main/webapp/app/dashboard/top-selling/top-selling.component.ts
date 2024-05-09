import { Component, OnInit } from '@angular/core';
import { Product, TopSelling } from './top-selling-data';
import { CommonModule } from '@angular/common';
import SharedModule from 'app/shared/shared.module';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: 'jhi-top-selling',
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.scss',
})
export class TopSellingComponent {
  topSelling: Product[];

  constructor() {
    this.topSelling = TopSelling;
  }
}
