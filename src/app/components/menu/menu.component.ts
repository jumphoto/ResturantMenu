import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { Router } from '@angular/router';
import { MenuItem, MenuItemTypeEnum } from 'src/app/modules/menu-item';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, CoverComponent],
})
export class MenuComponent implements OnInit {
  mainCourses: MenuItem[] = [];
  desserts: MenuItem[] = [];
  // fetchRestaurantHistory: any;
  menuItems: { appetizers: MenuItem[]; mainCourses: MenuItem[]; desserts: MenuItem[] } = {
    appetizers: [],
    mainCourses: [],
    desserts: [],
  };

  constructor(private router: Router, private backendService: BackendService) {}

  // ngOnInit() {
  //   this.backendService
  //     .fetchMenuItems()
  //     .then((items) => {
  //       // this.appetizers = items.filter((item) => item.type === 'APPETIZER');
  //       this.mainCourses = items.filter((item) => item.type === 'MAIN_COURSE');
  //       this.desserts = items.filter((item) => item.type === 'DESSERT');
  //       console.log(items);
  //       console.log(this.mainCourses);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // this.fetchRestaurantHistory();
  //   // console.log(this.fetchRestaurantHistory);
  // }

  ngOnInit(): void {
    this.backendService.fetchMenuItems().then((menuItems: any[]) => {
      const appetizers = menuItems.filter((item) => item.type === MenuItemTypeEnum.APPETIZER);
      const mainCourses = menuItems.filter((item) => item.type === MenuItemTypeEnum.MAIN_COURSE);
      const desserts = menuItems.filter((item) => item.type === MenuItemTypeEnum.DESSERT);

      this.menuItems = { appetizers, mainCourses, desserts };
    });
  }
  closeMenu() {
    this.router.navigate(['/cover']);
  }
}
