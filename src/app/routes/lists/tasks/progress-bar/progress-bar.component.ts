import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  template: `<mat-progress-bar mode="determinate" color="warn" [value]="length" >
  			</mat-progress-bar>`,
  styles: ['']
})

export class ProgressBarComponent {

	@Input() length:number;

}
