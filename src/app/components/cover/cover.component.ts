import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cover',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss'],
})
export class CoverComponent {
  constructor(private router: Router) {}
  /**
   *
   * @returns navivagtion path on nav bar
   */
  openMenu() {
    this.router.navigate(['/menu']);
  }
}
