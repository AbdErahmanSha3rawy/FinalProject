let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginbtn = document.querySelector('.loginbtn');
let link = document.querySelector('.link');

        username.style.border="2px solid red";
        username.style.boxShadow="2px 5px 4px red";

        password.style.border="2px solid red";
        password.style.boxShadow="2px 5px 4px red";


function checkInputs() { 

    if (username.value === "admin" && password.value === "admin") {
        loginbtn.style.opacity = "1";
        link.style.pointerEvents = "auto"; 

        }
         else {
        loginbtn.style.opacity = "0.5";
        link.style.pointerEvents = "none"; 
        link.style.curser = "pointer"; 

            }  
     if(username.value === "admin") {
        username.style.border="2px solid rgb(54, 245, 7)";
        username.style.boxShadow="2px 5px 4px rgb(54, 245, 7)";

     }                 
     else{
        username.style.border="2px solid red";
        username.style.boxShadow="2px 5px 4px red";


     }
      
     if(password.value === "admin") {
         password.style.border="2px solid rgb(54, 245, 7)";
        password.style.boxShadow="2px 5px 4px rgb(54, 245, 7)";

     }                 
     else{
        password.style.border="2px solid red";
        password.style.boxShadow="2px 5px 4px red";


     }
}                                                   
checkInputs();                                    
username.onkeyup = checkInputs;                                                   
password.onkeyup = checkInputs;           