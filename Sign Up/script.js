let link=document.querySelector('.link');
let Create_Account=document.querySelector('.Create_Account');
        Create_Account.style.opacity = "0.5";
        link.style.pointerEvents = "none"; 
        link.style.curser = "pointer"; 
let menu_icon=document.querySelector('.menu_icon');
let menu=document.querySelector('.menu');
   let elaicona=document.querySelector('.elaicona');

menu_icon.onclick=function(){
        if (menu.style.display === "block") {
menu.style.display="none";
   elaicona.src='imgs/menu.svg';       

        }
        else{
   elaicona.src='imgs/elaicona.svg';       
menu.style.display="block";

        }
}