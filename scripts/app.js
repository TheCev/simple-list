//let titles =[];
//let localesTasks = ["hola"]
//localStorage.setItem("Tasks",JSON.stringify(localesTasks))
//let localesTasks = JSON.parse(localStorage.getItem("Tasks"))
//let list = document.getElementById("list");

// esto arreglo el problema el primer inicio
	
	if (!JSON.parse(localStorage.getItem("Tasks"))){
		var localesTasks = ["HOLA, elimina esta tarea y agrega otras"]
		localStorage.setItem("Tasks",JSON.stringify(localesTasks))
		 var list = document.getElementById("list");
		 localesTasks = JSON.parse(localStorage.getItem("Tasks"))


	}else{
		var localesTasks = JSON.parse(localStorage.getItem("Tasks"))
		if (localesTasks.length == 0) {
			localesTasks = ["Hola :), elimina esta tarea y agrega otras"]
		}
		var list = document.getElementById("list");

	}
	getTasks()



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
		check.setAttribute("class","check")
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




