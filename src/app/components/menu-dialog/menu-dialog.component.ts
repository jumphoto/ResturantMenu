import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-item-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>{{ data.item.name }}</h2>
    <p>{{ data.item.description }}</p>
    <p>{{ data.item.price }}</p>
    <ul>
      <li *ngFor="let ingredient of data.metadata.ingredients">{{ ingredient }}</li>
      <li *ngFor="let image of data.metadata.imageUrl">
        <img [src]="image" />
        <!-- <img [src]="data.metadata.imageUrl || DEFAULT_IMAGE_URL" />
        <img
          [src]="'https://images.deliveryhero.io/image/fd-ph/LH/kfqo-hero.jpg'"
          style="max-width: 100%; height: auto;
        display: block; margin: 0 auto;"
        /> -->
      </li>
      <img [src]="data.metadata.imageUrl || default" />
    </ul>
    <button
      mat-button
      (click)="close()"
    >
      Close
    </button>
  `,
})
export class MenuDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<MenuDialogComponent>) {}
  default = 'https://images.deliveryhero.io/image/fd-ph/LH/kfqo-hero.jpg';

  close(): void {
    this.dialogRef.close();
  }
}
