import { Injectable } from '@angular/core';
import {Task, List} from 'src/app/routes/lists/interfaces/task.interface';
import { HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})

export class ListService {

	private apiUrl = 'https://simple-list-api-rest.herokuapp.com/users/1'
	
	constructor( private http: HttpClient ) { }

	getList(id):Observable<any>{

		return this.http.get(`${this.apiUrl}/lists/${id}`)

	}

	getTasks(id):Observable<Task[]>{

		return this.http.get<any[]>(`${this.apiUrl}/lists/${id}/tasks`)

	}

	sendList(list):Observable<List>{

		let listUrl = this.apiUrl + '/lists'
		return this.http.post<any>(listUrl, list)

	}

	sendTask(id,task):Observable<Task>{

		let tasksUrl = this.apiUrl + `/lists/${id}/tasks`
		return this.http.post<any>(tasksUrl, task)

	}
	
  	getLists():Observable<List[]>{
	
		return this.http.get<List[]>(`${this.apiUrl}/lists`)
 
	}

	deleteList(id):Observable<any>{

		let listUrl  = this.apiUrl + `/lists/${id}`
		return this.http.delete(listUrl)

	}

	deleteTask(listId,id):Observable<any>{

		let taskUrl  = this.apiUrl + `/lists/${listId}/tasks/${id}`
		return this.http.delete(taskUrl)

	}

	changeState(listId,task):Observable<any>{

		let tasksUrl = this.apiUrl + `/lists/${listId}/tasks/${task['task_id']}/state`
		return this.http.put(tasksUrl,task)

	}

}
