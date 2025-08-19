

let btn=document.querySelectorAll("button");

for(let btns of btn){
    btns.onclick=sayhello;
    btns.onmouseenter=function(){
        alert("click on button");
    }
}


function sayhello(){
    console.log("clicked here ");
}
