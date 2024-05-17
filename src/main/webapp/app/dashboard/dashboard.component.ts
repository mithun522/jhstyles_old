import { AfterViewInit, Component, OnInit } from '@angular/core';
import { topcard, topcards } from './top-cards-data';
import { CommonModule } from '@angular/common';
import SharedModule from 'app/shared/shared.module';
import { FeedsComponent } from './feeds/feeds.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { TopSellingComponent } from './top-selling/top-selling.component';
import introJs from 'intro.js';

@Component({
  selector: 'jhi-dashboard',
  standalone: true,
  imports: [CommonModule, SharedModule, FeedsComponent, SalesSummaryComponent, TopSellingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements AfterViewInit {
  topcards: topcard[];
  introJS = introJs();

  constructor() {
    this.topcards = topcards;
  }

  ngAfterViewInit(): void {
    const usernameElement = document.querySelector('[data-intro="dashboard"]');
    if (usernameElement instanceof HTMLElement) {
      this.introJS.setOptions({
        steps: [
          {
            element: usernameElement,
            title: 'Welcome',
            intro: 'This is your dashboard',
          },
        ],
      });

      // Start the introduction
      this.introJS.start();
    } else {
      console.error('Username element not found or is not an HTMLElement.');
    }
  }
}
