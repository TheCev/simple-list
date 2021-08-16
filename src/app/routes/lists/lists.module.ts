import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { TasksComponent } from './tasks/tasks.component';
import { MaterialModule } from 'src/app/material.module'
import { HttpClientModule } from '@angular/common/http';
import { AddListDialogComponent } from './add-list-dialog/add-list-dialog.component'
import { AddButtonComponent } from 'src/app/shared/components/add-button/add-button.component';
import { ProgressBarComponent } from './tasks/progress-bar/progress-bar.component'
import { AddTaskDialogComponent } from './tasks/add-task-dialog/add-task-dialog.component';
import { AddTasksButtonComponent } from './tasks/add-tasks-button/add-tasks-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    ListsComponent,
    TasksComponent,
    AddListDialogComponent,
    AddButtonComponent,
    ProgressBarComponent,
    AddTaskDialogComponent,
    AddTasksButtonComponent,
    DeleteButtonComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    MaterialModule,
  ]
})
export class ListsModule { }
