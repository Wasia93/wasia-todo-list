import inquirer from "inquirer";
let todos : string[] = [];
let condition = true;


while(condition){

let addTask = await inquirer.prompt(


    [
        {
           name: "todo",
           type: "input" ,
           message: "what do you want to addd in your todo?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todo?",
            default: "false"
        }
    ]
);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
}
