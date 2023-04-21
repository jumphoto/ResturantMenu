import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

const MODULES = [CommonModule, MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule];

@NgModule({
  imports: [MODULES],
  exports: [MODULES],
})
export class CoreModule {}
