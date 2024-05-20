import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'jhi-account',
  imports: [RouterModule, SharedModule],
  templateUrl: './account.component.html',
})
export default class AccountComponent {}
