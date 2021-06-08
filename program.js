import chalk from 'chalk'
import readlineSync from 'readline-sync'

initialize();




function addTask(){

}

function removeTask(){

}

function listTasks(){
    
}

function menuSelection(selected){
    switch(selected){
        case 'add' :
            addTask();
            break;
        case 'list' :
            listTasks();
            break;
        case 'remove' :
            removeTask();
            break;
        default:
            break;
    }
}

function start(){
    const options = ['add', 'list', 'remove'];
    const i = readlineSync.keyInSelect(options, 'Type your command')
    menuSelection(options[i]);
}

function initialize(){
    console.clear();
    console.log(chalk.green("\nStarting Terminal TODO\n"));
    setTimeout(()=>{
        console.clear();
        console.log("\n   .\n")
    },2000);
    setTimeout(()=>{
        console.clear();
        console.log("\n   . .\n")
    },2500);
    setTimeout(()=>{
        console.clear();
        console.log("\n   . . .\n")
    },3000);
    setTimeout(()=>{
        console.clear();
    },3500);
    setTimeout(start,4500);
}