import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styles: ['']
})

export class AddTaskDialogComponent {

 constructor( public dialogRef: MatDialogRef<AddTaskDialogComponent> ) { }


  onNoClick():void {
  	this.dialogRef.close()
  }

}
