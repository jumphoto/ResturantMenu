import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/shared/core.module';

@Component({
  selector: 'app-responsive-sidenav',
  standalone: true,
  templateUrl: './responsive-sidenav.component.html',
  styleUrls: ['./responsive-sidenav.component.scss'],
  imports: [CoreModule, RouterModule],
})
export class ResponsiveSidenavComponent implements OnDestroy {
  @Input() navItems: { label: string; routerLink: string[] }[] = [];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
