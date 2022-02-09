const list = {
    ["wake up"]: "Done",
    ["write some code"]: "In Progress",
    ["do nothing"]: "To Do",
    ["sawe the world"]: "To Do"
};

function changeStatus(taskName, taskStatus) {
    if (taskName in list) {
        list[taskName] = taskStatus;
    }

};

function addTask(taskName) {
    list[taskName] = "";
};

function deleteTask(taskName) {
    delete list[taskName];
};

function showList() {

    let toDo = "";
    let inProgress = "";
    let done = "";

    for (let key in list) {
        switch (list[key]) {
            case "To Do":
                toDo += key + "\n"
                break;
            case "In Progress":
                inProgress += key + "\n"
                break;
            case "Done":
                done += key + "\n"
                break;
        }
    }

    if (toDo == "") { toDo = "-" };
    if (inProgress == "") { inProgress = "-" };
    if (done == "") { done = "-" };

    console.log("\nto do:\n", toDo, "\nin progress:\n", inProgress, "\ndone:\n", done);
}

addTask("be perfect");
addTask("play with cat");
addTask("smile all day");

changeStatus("be perfect", "Done");
changeStatus("play with cat", "To Do");
changeStatus("smile all day", "In Progress");


deleteTask("do nothing");
deleteTask("smile all day");

showList();
