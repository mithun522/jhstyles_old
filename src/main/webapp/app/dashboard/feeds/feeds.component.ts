import { Component, OnInit } from '@angular/core';
import { Feeds, Feed } from './feeds-data';
import { CommonModule } from '@angular/common';
import SharedModule from 'app/shared/shared.module';

@Component({
  standalone: true,
  imports: [CommonModule, SharedModule],
  selector: 'jhi-feeds',
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss',
})
export class FeedsComponent {
  feeds: Feed[];

  constructor() {
    this.feeds = Feeds;
  }
}
