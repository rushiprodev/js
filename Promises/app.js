

//database concept we discussed here 



// function savetoDb(data,success,failure){

//     let internetspeed=Math.floor(Math.random()*10 +1);

//     if(internetspeed >4){
//         success();
        
//     }else{
//         failure();
        
//     }
//     }



//jab 1st vala datasave hoga toh dusara data save hoga 
    
// savetoDb("apna college",()=>{
//     console.log("success: data saved in database");
//     savetoDb("hello world",()=>{
//         console.log("success2 data saved ")
//         savetoDb("hello world",()=>{
//             console.log("success3,data saved")
//         },()=>{
//             console.log("failure3 ,data weak connection")
//         })
//     },()=>{
//         console.log("failure2 ,data weak connection ")
//     })
// },()=>{
//     console.log("failure : weak connection data not saved ")
// });
  

//so this is call hell happens here complex data  
//but this is complex task then ?? 




function savetoDb(data){

    

    return  new Promise((resolve,reject)=>{

        let internetspeed=Math.floor(Math.random()*10 +1);



        if(internetspeed>4){
            resolve("data was saved");
        }else{
            reject("failure weak connection");
        }

    })
  
    }



    // let request=savetoDb("data send"); //req=promise object 

// request.then(()=>{


// console.log("promise was fulfilled");
// console.log(request)


// })
// .catch(()=>{
//     console.log("promise was rejected");
//     console.log(request)
// })


//compact way
// savetoDb("data send")
// .then(()=>{
//     console.log(" data 1 is saved ")
//     // console.log(Request);
//     savetoDb("helloworld").then(()=>{
//         console.log("data 2 is saved ")
//     })
// })
// .catch(()=>{
//     console.log("rejected");
//     // console.log(Request);
// })



//another  way
savetoDb("data send")
.then(()=>{
    console.log(" data 1 is saved ");
    // console.log(Request);
    return savetoDb("hello   world")
}).then(()=>{   
    console.log("data  2 is saved ");
    return savetoDb("Rushi")
})
.then(()=>{
    console.log("data 3 is saved")  
})
.catch(()=>{
    console.log("rejected");
    // console.log(Request);
})


