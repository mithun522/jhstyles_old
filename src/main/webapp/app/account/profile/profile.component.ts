import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Account } from 'app/core/auth/account.model';
import { AccountService } from 'app/core/auth/account.service';
import SharedModule from 'app/shared/shared.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jhi-profile',
  standalone: true,
  imports: [SharedModule, RouterLink, RouterOutlet],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  imageUrl = '';
  profileData!: Account;
  profileDataSubscription?: Subscription;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.profileDataSubscription = this.accountService.identity().subscribe(result => {
      this.profileData = result as Account;
    });
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    this.convertToBase64(file).then((result: string) => {
      this.imageUrl = result;
    });
  }

  convertToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  ngOnDestroy(): void {
    this.profileDataSubscription?.unsubscribe();
  }
}
