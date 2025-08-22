// let catFact = {
//     fact: "Cats sleep for about 13–16 hours a day.",
//     length: 42
//   };
  
//   let jsonString = JSON.stringify(catFact);
//   console.log(jsonString);
  



let urls="https://catfact.ninja/fact"

 //it returns promise 
fetch(urls)
.then((response)=>{
  
    console.log(response);
    return response.json() //it gives promise
    
})
.then((data)=>{
    console.log("data1",data);
    return fetch(urls)
})
.then((res)=>{
    console.log(res);
    return res.json()
    

})
.then((data2)=>{
    console.log("data2",data2)
})
.catch((err)=>{
    console.log(err);
})

 console.log("i am happy")

 
