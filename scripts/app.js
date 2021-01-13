//let titles =[];
//let localesTasks = ["hola"]
//localStorage.setItem("Tasks",JSON.stringify(localesTasks))
//let localesTasks = JSON.parse(localStorage.getItem("Tasks"))
//let list = document.getElementById("list");

// esto arreglo el problema el primer inicio
	
	if (!JSON.parse(localStorage.getItem("Tasks"))){
		var localesTasks = [{title:"Hola :), elimina esta tarea y agrega otras",state:"check",}]
		localStorage.setItem("Tasks",JSON.stringify(localesTasks))
		 var list = document.getElementById("list");
		 localesTasks = JSON.parse(localStorage.getItem("Tasks"))


	}else{
		var localesTasks = JSON.parse(localStorage.getItem("Tasks"))
		if (localesTasks.length == 0) {
			localesTasks = [{title:"Hola :), elimina esta tarea y agrega otras",state:"check"}]
		}
		var list = document.getElementById("list");

	}
	getTasks()

	function tarea (title,state = "check",index){
		this.title = title;
		this.state = state;


	}



function addTask(){
	let titulo = prompt("titulo");
	
	
	if (titulo) {
		let indice = localesTasks.length
		let task = new tarea(titulo,"check",indice);
	localesTasks.push(task)
	saveTask()
}

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
		//let buttonDelete = localesTasks[i].buttonDelete;
		//buttonDelete.setAttribute("type","button");

		//buttonDelete.setAttribute("value","X")
		//let check = document.createElement("input");
		//check.setAttribute("class","check")
		//check.setAttribute("id",localesTasks[i].title)
		//check.setAttribute("type","checkbox")
		//element[i] = document.createElement("li")
		//element[i].innerHTML = localesTasks[i].title		//element[i].appendChild(check)
		//element[i].appendChild(buttonDelete)
		//element[i].appendChild(content[i]);
		list.innerHTML += `<li > <button onclick="check(${i})" class="${localesTasks[i].state}"></button>${localesTasks[i].title} <button onclick="deleteTask(${i})" class="delete">x</button>
		</li>`;

		//list.appendChild(element[i]);
	}
}

function deleteTask(a){
	
	localesTasks.splice(a,1);
	saveTask()

}

function check(a){
	if (localesTasks[a].state === "check") {
		localesTasks[a].state = "checked";

	}
	else{
		localesTasks[a].state = "check"
	}
	saveTask()
}




