import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  template: `<h1 mat-dialog-title>Delete a List</h1>
				<div mat-dialog-content>Are you sure?.</div>
			<div mat-dialog-actions>
  				<button mat-button mat-dialog-close >Close</button>
  				<button mat-button [mat-dialog-close]="true" color="warn">Delete</button>
			</div>`,
  styles: ['']
})

export class DeleteDialogComponent {

  constructor( public dialogRef: MatDialogRef<DeleteDialogComponent> ) { }

  
}
