import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './home.html',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goTodos() {
    this.router.navigate(['/todos']);
  }

  goWeekend() {
    this.router.navigate(['/weekend-party'], { queryParams: { bypass: true } });
  }
}
