import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsiveSidenavComponent } from './components/responsive-sidenav/responsive-sidenav.component';
import { CoverComponent } from './components/cover/cover.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule,
    ResponsiveSidenavComponent,
    CoverComponent,
    MatDialogModule,
    CommonModule,
    MenuDialogComponent,
  ],
})
export class AppComponent {
  navItems: { label: string; routerLink: string[] }[] = [
    { label: 'Instructions', routerLink: ['instructions'] },
    { label: 'Menu', routerLink: ['/cover'] },
  ];
}
