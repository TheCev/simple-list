export interface Task {
	id:number;
	title:string;
	state:string;
	listId:string;
	userId:number;
}

export interface List {
	id:number,
	'list_title':string,
	userId:number
}