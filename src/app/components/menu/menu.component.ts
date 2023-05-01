import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { Router } from '@angular/router';
import { MenuItem, MenuItemMetadata, MenuItemTypeEnum } from 'src/app/modules/menu-item';
import { BackendService } from 'src/app/services/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, CoverComponent, HttpClientModule, LoaderComponent],
  providers: [MatDialog],
})
export class MenuComponent implements OnInit {
  restaurantHistory: string | null = null;
  menuItems: { appetizers: MenuItem[]; mainCourses: MenuItem[]; desserts: MenuItem[]; chefsSpecials: MenuItem[] } = {
    appetizers: [],
    mainCourses: [],
    desserts: [],
    chefsSpecials: [],
  };
  menuItemsMetadata: Record<string, MenuItemMetadata> = {};
  menuDataLoaded: boolean = false;
  chefsSpecials: MenuItem[] = [];

  constructor(private router: Router, private backendService: BackendService, private dialog: MatDialog) {}
  /**
   *
   * @returns fetchMenuItem,fetchRestaurantHistory,fetchChefsSpecials using the Enums as refrence
   */
  ngOnInit(): void {
    this.backendService.fetchMenuItems().then((menuItems: any[]) => {
      const appetizers = menuItems.filter((item) => item.type === MenuItemTypeEnum.APPETIZER);
      const mainCourses = menuItems.filter((item) => item.type === MenuItemTypeEnum.MAIN_COURSE);
      const desserts = menuItems.filter((item) => item.type === MenuItemTypeEnum.DESSERT);
      const chefsSpecials = menuItems.filter((item) => item.type === MenuItemTypeEnum.CHEFS_SPECIAL);

      this.menuItems = { appetizers, mainCourses, desserts, chefsSpecials };

      this.backendService.fetchRestaurantHistory().then((val) => {
        this.restaurantHistory = val;
      });

      this.backendService.fetchChefsSpecials().then((menuItems) => {
        this.menuItems.chefsSpecials = menuItems;
        this.menuDataLoaded = true;
      });
    });
  }
  /**
   *
   * @returns fetchMenuItemMetadata to display general menu item information and the metadata for the selected menu item
   */
  openModal(item: MenuItem) {
    this.backendService
      .fetchMenuItemMetadata(item.id)
      .then((metadata: MenuItemMetadata) => {
        this.menuItemsMetadata[item.id] = metadata;
        const dialogRef = this.dialog.open(MenuDialogComponent, {
          data: { item, metadata, menuItems: this.menuItems },
        });
      })
      .catch((error) => console.log(error));
  }

  closeMenu() {
    this.router.navigate(['/cover']);
  }
}
