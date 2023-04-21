import { Route } from '@angular/router';
import { InstructionsComponent } from './components/instructions/instructions.component';

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
];
