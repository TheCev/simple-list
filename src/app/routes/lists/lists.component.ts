import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { List } from 'src/app/routes/lists/interfaces/task.interface'
import { MatDialog } from '@angular/material/dialog'
import { DeleteDialogComponent } from 'src/app/routes/lists/delete-dialog/delete-dialog.component'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({ 
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.sass']
})

export class ListsComponent implements OnInit{

  lists:any[] = []

  constructor(

  	private listSvc:ListService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar

  	) { }

  getLists():void{

    this.listSvc.getLists()
      .subscribe((lists:List[]) => this.lists = lists)

    }

    addNewList(newList:List):void{

      this.listSvc.sendList(newList).subscribe((list:List)=> {
        this.getLists()
        this.openSnackBar('A List Has Been Added')
      })
    
    }

  openSnackBar(message){

    this.snackBar.open(message,'', {
      duration: 3000
    })

  }
  
  deleteList(id){

    this.listSvc.deleteList(id).subscribe((list:List) =>{
      //const index = this.lists.findIndex((list:List) => list.id === id)

      //if(index != -1){
      //  this.lists.splice(index,1)
      
        this.openSnackBar('a List Has Been Deleted')
        this.getLists()
      //}

    })
    
  }

  openDialog(id):void {

      const dialogRef = this.dialog.open(DeleteDialogComponent,{ width:'300px' })

      dialogRef.afterClosed().subscribe((result) =>{
        if(result === true) {
            this.deleteList(id)
        }
      })

  }

  	ngOnInit(){

      this.getLists()

    }

}
