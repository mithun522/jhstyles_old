import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import SharedModule from 'app/shared/shared.module';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import LoginComponent from 'app/login/login.component';

@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [SharedModule, RouterModule, LoginComponent, SharedModule],
})
export default class HomeComponent implements OnInit, OnDestroy {
  account = signal<Account | null>(null);
  showCarousel = true;
  testimonials = [
    {
      text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZ0UrB7Mb2VvuNENEvYCh5m7OeKbn1lDpPnhDRUfgo8qaYxJkZCHzUFG-aw&s',
      author: 'Abraham Linkon, Themefisher.com',
    },
    {
      text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZ0UrB7Mb2VvuNENEvYCh5m7OeKbn1lDpPnhDRUfgo8qaYxJkZCHzUFG-aw&s',
      author: 'Abraham Linkon, Themefisher.com',
    },
    {
      text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZ0UrB7Mb2VvuNENEvYCh5m7OeKbn1lDpPnhDRUfgo8qaYxJkZCHzUFG-aw&s',
      author: 'Abraham Linkon, Themefisher.com',
    },
    {
      text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZ0UrB7Mb2VvuNENEvYCh5m7OeKbn1lDpPnhDRUfgo8qaYxJkZCHzUFG-aw&s',
      author: 'Abraham Linkon, Themefisher.com',
    },
    {
      text: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJZ0UrB7Mb2VvuNENEvYCh5m7OeKbn1lDpPnhDRUfgo8qaYxJkZCHzUFG-aw&s',
      author: 'Abraham Linkon, Themefisher.com',
    },
  ];

  private readonly destroy$ = new Subject<void>();

  private accountService = inject(AccountService);
  private router = inject(Router);

  navigateToSignIn(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.accountService
      .getAuthenticationState()
      .pipe(takeUntil(this.destroy$))
      .subscribe(account => this.account.set(account));
  }

  login(): void {
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
