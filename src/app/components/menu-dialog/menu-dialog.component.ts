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

      <img [src]="data.metadata.imageUrl" />
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

  close(): void {
    this.dialogRef.close();
  }
}
