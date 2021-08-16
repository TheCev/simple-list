import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/routes/page-not-found/page-not-found.component'
const routes: Routes = [
{ 
	path: 'lists', loadChildren: () => import('./routes/lists/lists.module').then(m => m.ListsModule) 
},
{ path: 'join', loadChildren: () => import('./routes/join/join.module').then(m => m.JoinModule) },
{ path: 'login', loadChildren: () => import('./routes/login/login.module').then(m => m.LoginModule) },
{
	path:"**", component:PageNotFoundComponent
}

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
