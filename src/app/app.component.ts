import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResponsiveSidenavComponent } from './components/responsive-sidenav/responsive-sidenav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, ResponsiveSidenavComponent],
})
export class AppComponent {
  navItems: { label: string; routerLink: string[] }[] = [{ label: 'Instructions', routerLink: ['instructions'] }];
}
