import { Route } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { CoverComponent } from './components/cover/cover.component';
import { MenuComponent } from './components/menu/menu.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'instructions',
  },
  {
    path: 'instructions',
    component: InstructionsComponent,
  },
  {
    path: 'cover',
    component: CoverComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
];
