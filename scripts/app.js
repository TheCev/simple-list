let titles =[];
let localesTasks = JSON.parse(localStorage.getItem("Tasks"))
let list = document.getElementById("list");


function addTask(){
	
	let title = prompt("titulo");
	localesTasks.push(title)
	

	saveTask()

}

function saveTask(){
	
	//let save = titles.concat(localesTasks)
	localStorage.setItem("Tasks",JSON.stringify(localesTasks))
	getTasks()
}

function getTasks(){
	
	list.innerHTML = "";
	for (let i = 0; i < localesTasks.length; i++) {
		let element =[];
		let content = [];
		let check = document.createElement("input");
		check.setAttribute("type","checkbox")
		element[i] = document.createElement("li")
		content[i] = document.createTextNode(localesTasks[i]);

		element[i].appendChild(check)
		element[i].appendChild(content[i]);
		list.appendChild(element[i]);
	}
}

function deleteTask(){
	
	localesTasks.pop()
	saveTask()

}
getTasks()


