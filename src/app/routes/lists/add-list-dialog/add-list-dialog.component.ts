import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-list-dialog',
  templateUrl: './add-list-dialog.component.html',
  styles: ['']
})

export class AddListDialogComponent {

  constructor( public dialogRef: MatDialogRef<AddListDialogComponent> ) { }

  onNoClick = ():void => this.dialogRef.close()

}

