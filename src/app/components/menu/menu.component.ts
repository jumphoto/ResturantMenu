import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, CoverComponent],
})
export class MenuComponent {
  constructor(private router: Router) {}

  closeMenu() {
    this.router.navigate(['/cover']);
  }
}
