
let localesTasks = [];
let list = document.getElementById("list");

//List Controller
const listController = {

	//Methods

	addTask() {
		const title = prompt("Insert a list title")

		if (title) {
			const index = localesTasks.length
			const task = {
				title,
				state:"check"
			}

			localesTasks.push(task)
			this.saveTasks()
		}
	},

	saveTasks() {
		localStorage.setItem("Tasks",JSON.stringify(localesTasks))
		this.showTasks()
	},

	showTasks ()  {
		list.innerHTML = "";

		for(let i = 0; i < localesTasks.length; i++){
			list.innerHTML += `	<li  class="list-group-item ${localesTasks[i].state == "checked" ? "list-group-item-primary" : ""}">
									<div class="row">
										<div class="col-2">
											<input type="checkbox" onclick="listController.checkTask(${i})" ${localesTasks[i].state} class="form-check-input me-1">
										</div>
										<div class="col-8">
											<p class="lead text-primary"><b>${localesTasks[i].title}</b></p> 
										</div>
										<div class="col-2">
											<button onclick="listController.deleteTask(${i})" class="btn btn-close btn-close-danger btn-sm" ></button>
										</div>
									</div>
								</li>`;
		}
	},

	deleteTask(index) {
		localesTasks.splice(index,1)
		this.saveTasks()
	},

	checkTask(index) {

		if (localesTasks[index].state === "check") {
			localesTasks[index].state = "checked";
		} else {
		localesTasks[index].state = "check"
		}

		this.saveTasks()

	}
}



function firstTime () {

	const task = {
			title:"Hi! :), delete this task, then add more tasks",
			state:"check"
		}

	if(!JSON.parse(localStorage.getItem("Tasks"))){
		

		localesTasks.push(task)

		localStorage.setItem("Tasks",JSON.stringify(localesTasks))


	} 

		localesTasks = JSON.parse(localStorage.getItem("Tasks"));

		if(localesTasks.length == 0) {
			localesTasks.push(task)
		}

		
	listController.showTasks()

}

	firstTime()

