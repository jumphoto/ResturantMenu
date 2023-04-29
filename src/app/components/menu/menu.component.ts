import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CoverComponent } from '../cover/cover.component';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/modules/menu-item';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule, CoverComponent],
})
export class MenuComponent implements OnInit {
  appetizers: MenuItem[] = [];
  mainCourses: MenuItem[] = [];
  desserts: MenuItem[] = [];

  constructor(private router: Router, private backendService: BackendService) {}

  ngOnInit() {
    this.backendService
      .fetchMenuItems()
      .then((items) => {
        this.appetizers = items.filter((item) => item.type === 'APPETIZER');
        this.mainCourses = items.filter((item) => item.type === 'MAIN_COURSE');
        this.desserts = items.filter((item) => item.type === 'DESSERT');
        console.log(items);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  closeMenu() {
    this.router.navigate(['/cover']);
  }
}
