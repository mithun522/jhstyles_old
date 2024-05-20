import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-get-started',
  standalone: true,
  imports: [],
  templateUrl: './get-started.component.html',
  styleUrl: './get-started.component.scss',
})
export class GetStartedComponent {
  private router = inject(Router);

  navigateToSignIn(): void {
    this.router.navigate(['/account/login']);
  }
}
