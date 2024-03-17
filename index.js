// const todark = document.querySelector("#dark")
// const body = document.querySelector(".container");
// const navbar = document.querySelector(".navbar");
// const icon = document.querySelector("i");
// const footer = document.querySelector(".footer");
// const p = document.querySelector("p");
// const h1 = document.querySelector("h1");
// const h4 = document.querySelector("h4")

// click=0;

// function dark(){
//     if(click %2==0){
//     body.style.background="black";
//     navbar.style.background = "black";
//     footer.style.background = "black";
//     icon.style.color="white";
//     p.style.color="white";
//     todark.innerHTML="towhite";
//     todark.style.background="white";
//     todark.style.color="black";
//  h1.style.color="white";
//  h4.style.color="white"

//     }
//     else{
//     body.style.background="white";
//     navbar.style.background = "white";
//     icon.style.color="white";
//     p.style.color="black";
//     footer.style.background = "white";  
//     todark.style.background="black";
//     todark.innerHTML="todark";
//     todark.style.color="white";
//     h1.style.color="black";
//     h4.style.color="black"
//     }
//     click++
    
// }
const container=document.querySelector(".container");
const profile = document.querySelector(".container-profile")
go_profile=()=>{
container.style.visibility="hidden";
profile.style.visibility="visible";
}


go_hom=()=>{
profile.style.visibility="hidden";

container.style.visibility="visible";

}