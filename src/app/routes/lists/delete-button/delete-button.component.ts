import { Component, Input } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-delete-button',
  template: `<button mat-icon-button color="warn" >
  				<mat-icon>delete_outlined</mat-icon>
  			</button>`,
  styles: ['']
})

export class DeleteButtonComponent{ }


