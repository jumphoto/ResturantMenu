import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { Router } from '@angular/router';
import { MenuItem, MenuItemTypeEnum } from 'src/app/modules/menu-item';
import { BackendService } from 'src/app/services/backend.service';
import { getRandomNumberBetween } from 'src/app/utils/common-functions';
import { delay, lastValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, CoverComponent],
})
export class MenuComponent implements OnInit {
  restaurantHistory: string | null = null;
  menuItems: { appetizers: MenuItem[]; mainCourses: MenuItem[]; desserts: MenuItem[] } = {
    appetizers: [],
    mainCourses: [],
    desserts: [],
  };

  constructor(private router: Router, private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.fetchMenuItems().then((menuItems: any[]) => {
      const appetizers = menuItems.filter((item) => item.type === MenuItemTypeEnum.APPETIZER);
      const mainCourses = menuItems.filter((item) => item.type === MenuItemTypeEnum.MAIN_COURSE);
      const desserts = menuItems.filter((item) => item.type === MenuItemTypeEnum.DESSERT);

      this.menuItems = { appetizers, mainCourses, desserts };
    });

    this.fetchRestaurantHistory();
  }

  fetchRestaurantHistory() {
    const serverDelay = getRandomNumberBetween(1000, 2000);
    lastValueFrom(of('Restaurant history data').pipe(delay(serverDelay)))
      .then((data) => (this.restaurantHistory = data))
      .catch((error) => console.log(error));
  }

  closeMenu() {
    this.router.navigate(['/cover']);
  }
}
