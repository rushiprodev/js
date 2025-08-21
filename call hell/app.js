

let h1=document.querySelector("h1");


//instead of writing such a type i create ome function


function changecolor(color,delay,nextcolorchange){

    setTimeout(() => {
        h1.style.color=color;
        if(nextcolorchange) nextcolorchange()
        
    }, delay);
   
};

//here we perform nesting 
//calbback ke andar nesting ie (ek aur callback )
//suppose we have lot of this nesting then it become diddicult to handle hence we do 
//nesting of callbacks and phenomenon cakled as callback hells .


//isko bachne ke liye we used promises/async and await.


changecolor("red",1000, ()=>{
    changecolor("orange",1000,()=>{
        changecolor("pink",4000);
    });
}
)

 //if error occurs then last not execute 


// setTimeout(()=>{
// h1.style.color="orange"
// },1000
// )


// setTimeout(()=>{
//     h1.style.color="pink"
//     },2000
//     )


// setTimeout(()=>{
//         h1.style.color="green"
//         },3000
//         )



