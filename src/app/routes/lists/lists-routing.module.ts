import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
							{ path: '', component: ListsComponent },
							{ path:'tasks/:listId', component:TasksComponent }
						];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ListsRoutingModule { }
