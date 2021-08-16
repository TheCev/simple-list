import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { Task, List } from 'src/app/routes/lists/interfaces/task.interface';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.sass']
})

export class TasksComponent implements OnInit {

	listId:string;

	list = { 'list_title':"" };

	tasks:Task[] = [];

	percentage:number = 0

	tasksDone:Task[] = []


	constructor(

		private route: ActivatedRoute,
		private listSvc:ListService

		) { }

	showTasks():void {

		this.listSvc.getTasks(this.listId).subscribe(
			(tasks:Task[])=> {
				this.tasks = tasks
			this.updatePercentage()

		})
		
	}

	getList():void{

		this.listSvc.getList(this.listId).subscribe((list:List) => {
			this.list = list
		})

	}

	addNewTask(newTask:Task):void {

		this.listSvc.sendTask(this.listId,newTask).subscribe((task:Task) => { 
			this.showTasks()
			this.updatePercentage()
			//this.showTasks()
		})

	}

	changeState(task:Task):void{

		switch (task.state) {
			case 'Y':
				task['task_state'] = 'N'
				break;
			
			case 'N':
				task['task_state'] = 'Y'
				break;
		}

		this.listSvc.changeState(this.listId,task).subscribe((data) => {
			this.showTasks()
			this.updatePercentage()
		})

	}

	deleteTask(id):void{

		this.listSvc.deleteTask(this.listId,id).subscribe(task => {
			//const index = this.tasks.findIndex((task) => task.id === id)
			//this.tasks.splice(index,1)
			this.showTasks()
			this.updatePercentage()
		
		})
	}

	updatePercentage():void{

		this.tasksDone = this.tasks.filter((task) => task['task_state'] == 'Y')
		this.percentage = this.tasksDone.length / this.tasks.length * 100

	}

	ngOnInit(){
		
		this.route.params.subscribe(params => {
			this.listId = params['listId']
			this.showTasks()
			this.getList()

		})

	}
	
}
