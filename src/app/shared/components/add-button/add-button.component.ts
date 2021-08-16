import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddListDialogComponent } from '../../../routes/lists/add-list-dialog/add-list-dialog.component'
@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.sass']
})
export class AddButtonComponent implements OnInit {

  constructor(
  	public dialog:MatDialog
  	) { }

  ngOnInit(): void {
  }
  @Input() listId:number;
 @Output() newList = new EventEmitter
  openDialog():void {
  const dialogRef = this.dialog.open(AddListDialogComponent,{
    width:'300px'
  })

  dialogRef.afterClosed().subscribe((result:string) =>{
    const newList = {
      'title':result
    }
   console.log(newList)
   this.newList.emit(newList)

  })
}

}
