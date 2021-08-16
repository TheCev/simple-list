import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-add-tasks-button',
  template: `<button mat-icon-button (click)="openDialog()">
 				<mat-icon color="primary">add_circle</mat-icon>
 			</button>`,
  styleUrls: ['./add-tasks-button.component.sass']
})

export class AddTasksButtonComponent{

   @Input() listId:number;
   @Output() newTask = new EventEmitter

   constructor( public dialog:MatDialog ) { }

   openDialog():void {
	
		const dialogRef = this.dialog.open(AddTaskDialogComponent,{ width:'300px' })

  		dialogRef.afterClosed().subscribe((result:string) =>{

    		if(result != ""){
				
				const newTask = {
    				taskTitle:result
   				}
   				
   				this.newTask.emit(newTask)
    		}

  		})
	} 

}
