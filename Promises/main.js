


let h1=document.querySelector("h1");

// function changecolor(color,delay,nextcolor){
//    setTimeout(()=>{
//         h1.style.color=color;
//         if(nextcolor) nextcolor()
//   },delay)
// }





// changecolor("orange",1000,()=>{
//     changecolor("green",2000,()=>{
//         changecolor("pink",3000,()=>{

//         });
//     });
// });


//here we apply promises s

function changecolor(color,delay){
    
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            h1.style.color=color;
            resolve("color change successfully")
            
      },delay)

    });
   
 }


changecolor("red",1000)
.then(()=>{
    console.log("red colcor was completed ");
    return changecolor("orange",1000);
})
.then(()=>{
    console.log("orange colcor was completed ");
    return changecolor("green",1000);
})
.then(()=>{
    console.log("green colcor was completed ");
    return changecolor("blue",1000)
    
})
.then(()=>{
    console.log("change color of blue")
})
.catch(()=>{
    console.log("generate error  ");
})




//  changecolor(,()=>{
//     changecolor("green",2000,()=>{
//         changecolor("pink",3000,()=>{

//         });
//     });
// });










