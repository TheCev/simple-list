import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join.component';
import { MaterialModule } from 'src/app/material.module'
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class JoinModule { }
