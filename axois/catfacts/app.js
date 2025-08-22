let urls='https://catfact.ninja/fact';



let btn=document.querySelector("button");


let para=document.querySelector("p")


btn.addEventListener("click",async()=>{
    // console.log("btn clicked ");
    let result=await getdata();
    para.innerText=result;

})


// fetch(urls)
// .then((res)=>{
//     // console.log(res)
//     return res.json();
// })
// .catch((err)=>{
//     console.log(err);
// })




async function getdata(){
try{
    let res= await axios.get(urls);
    // let data=await res.json();
    return res.data.fact;

}catch(e){

    console.log(e)
    return "NO FACT Found "

}

console.log("bye ")
    
}














