let urls='https://dog.ceo/api/breeds/image/random'



let btn=document.querySelector("button");



btn.addEventListener("click",async()=>{
    // console.log("btn clicked ");

    let link=await getdata();
    let img=document.querySelector("#result");

    img.setAttribute("src",link); //source ki value link ke equal then show image 
  console.log(link);
})





async function getdata(){
    try{
    let res= await axios.get(urls);
    // console.log(res.data.message)
    return res.data.message;
    
    }
    catch(e){
        console.log("error occurs ")
        return "/"
    }
} 