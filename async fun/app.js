

// async function  greet(){
//     return "hello";  //return a promise and fulfilled and returns a value 
// }



// if error occours then promise return and state is rejected 

// async function  greet(){
//     // AbortController.abc();//using throw keyword we also throw error

//     throw jgmfkf;
//     return "hello"; 
// } 


//we can apply then and catch to our promise 


// async function greet(){
//     throw "404 page not found";
//     return "hello ";
    
// }


// //if promise success then 

//  greet()
//  .then((result)=>{
//     console.log("promise was successfull");
//     console.log("result is ",result);
//  }).catch((error)=>{
//     console.log("promise was rejected with error:",error);
    
//  })


function getNo(){
 return  new Promise((resolve,reject)=>{


    setTimeout(()=>{
        
        let num=Math.floor(Math.random()*10)+1;
        if(num>6){
            reject("promise reject ")
        }
        console.log(num);
        resolve();
    },1000)
  
 })
};


async function demo(){

    try{

    await getNo();
    await getNo();
    await getNo();
    await getNo();
    await getNo();

    }
    catch(err){
        console.log("error occours ",err);
    }
   


    let a=5;
    console.log(a);
    console.log("new numbers =",a+3);

}






