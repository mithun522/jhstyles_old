import { Component, OnInit } from '@angular/core';
import { topcard, topcards } from './top-cards-data';
import { CommonModule } from '@angular/common';
import SharedModule from 'app/shared/shared.module';
import { FeedsComponent } from './feeds/feeds.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { TopSellingComponent } from './top-selling/top-selling.component';

@Component({
  selector: 'jhi-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule, FeedsComponent, SalesSummaryComponent, TopSellingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  topcards: topcard[];

  constructor() {
    this.topcards = topcards;
  }
}
