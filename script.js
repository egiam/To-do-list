//Info date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

//Task container
const taskContainer = document.getElementById("tasksContainer");

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString("es-ES", { day: "numeric" });
    dateText.textContent = date.toLocaleString("es-ES", { weekday: "long" });
    dateMonth.textContent = date.toLocaleString("es-ES", { month: "short" });
    dateYear.textContent = date.toLocaleString("es-ES", { year: "numeric" });
};

const addNewTask = (event) => {
    event.preventDefault();
    // Para que el form no haga un submit y nos quiera llevar a otra pagina
    const { value } = event.target.taskText;
    //Obtenemos el valor que tiene dentro el input de texto
    if (!value) return; //Evitamos que se hagan tareas vacias
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.addEventListener("click", changeTaskState);
    task.textContent = value;
    taskContainer.prepend(task);
    event.target.reset();
    //Reseteamos el form para q quede vacio el input
};

const changeTaskState = (event) => {
    event.target.classList.toggle("done"); //Para cambiar el estado de la tarea
};

const order = () => {
    const done = [];
    const toDo = [];
    taskContainer.childNodes.forEach((el) => {
        if (el.classList.contains("done")) {
            done.push(el);
        } else {
            toDo.push(el);
        }
    });
    return [...toDo, ...done]; //Concatenamos las dos listas - Primero el toDo, para que quede en orden en base a lo que hay q hacer y despues lo ya hecho.
};

const renderOrderedTasks = () => {
    order().forEach((el) => taskContainer.appendChild(el)); //Tomamos el elemento y lo agregamos uno por uno al container.
};

setDate();