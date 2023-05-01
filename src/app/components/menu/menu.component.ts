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
  menuItems: { appetizers: MenuItem[]; mainCourses: MenuItem[]; desserts: MenuItem[] } = {
    appetizers: [],
    mainCourses: [],
    desserts: [],
  };
  menuItemsMetadata: Record<string, MenuItemMetadata> = {};
  menuDataLoaded: boolean = false;

  constructor(
    private router: Router,
    private backendService: BackendService,
    private dialog: MatDialog, // public imageUrl: string,
  ) {}

  ngOnInit(): void {
    this.backendService.fetchMenuItems().then((menuItems: any[]) => {
      const appetizers = menuItems.filter((item) => item.type === MenuItemTypeEnum.APPETIZER);
      const mainCourses = menuItems.filter((item) => item.type === MenuItemTypeEnum.MAIN_COURSE);
      const desserts = menuItems.filter((item) => item.type === MenuItemTypeEnum.DESSERT);

      this.menuItems = { appetizers, mainCourses, desserts };

      this.backendService.fetchRestaurantHistory().then((val) => {
        this.restaurantHistory = val;

        //done loaded
        this.menuDataLoaded = true;
      });
    });
  }

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
    console.log(this.menuItemsMetadata);
  }

  closeMenu() {
    this.router.navigate(['/cover']);
  }
}
