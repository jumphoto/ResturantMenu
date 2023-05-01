import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-item-dialog',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./menu-dialog.component.scss'],
  template: `
    <div class="mat-dialog-container">
      <h2 class="menuTitle">{{ data.item.name }}</h2>
      <p>{{ data.item.description }}</p>
      <p>{{ data.item.price }}</p>
      <ul>
        <li *ngFor="let ingredient of data.metadata.ingredients">{{ ingredient }}</li>

        <img
          class="metaImage"
          [src]="data.metadata.imageUrl"
        />
      </ul>
      <button
        class="close-menu-btn"
        mat-button
        (click)="close()"
      >
        Close
      </button>
    </div>
  `,
})

/**
 *
 * @returns close dialog
 */
export class MenuDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<MenuDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }
}
