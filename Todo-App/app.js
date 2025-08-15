

let todo=[];

let  req = prompt("please enter your request");



  
while(true){


    if(req=="quit"){
        console.log("quit the  app");
        break;  
    }


    if(req=="list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("-----------");
    }else if(req=="add"){
        let task=prompt("plese enter a task that u wanat to add");
        todo.push(task);
        console.log("task addeed successfully ");
    }else if(req=="delete"){

        let index=prompt("Enter the task index u want to delete")

        todo.splice(index,1);

        console.log("delete task successfully ");

 

    }
    else {
        console.log("Unknown command. Please use 'add', 'list', or 'quit'.");
    }
    
     req = prompt("please enter your request");

}