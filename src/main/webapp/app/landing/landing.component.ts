import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  private router = inject(Router);

  navigateToSignIn(): void {
    this.router.navigate(['/login']);
  }
}
