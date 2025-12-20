let username = document.querySelector('#username');
let password = document.querySelector('#password');
let loginbtn = document.querySelector('.loginbtn');
let link = document.querySelector('.link');
let uservalue=username.value;
     


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
           if(password.value === "admin") {
         password.style.border="2px solid rgb(54, 245, 7)";
        password.style.boxShadow="2px 8px 4px rgb(54, 245, 7)";

     }  
      else if(password.value.length === 0){
        password.style.boxShadow="none";
        password.style.border="2px solid black";

     }                
     else{
        password.style.border="2px solid red";
        password.style.boxShadow="2px 8px 4px red";


     }
      if(username.value === "admin" ) {
        username.style.border="2px solid rgb(54, 245, 7)";
        username.style.boxShadow="2px 8px 4px rgb(54, 245, 7)";
     }  
     else if(username.value.length === 0){
        username.style.border="2px solid black";
        username.style.boxShadow="none";
     }               
     else{
        username.style.border="2px solid red";
        username.style.boxShadow="2px 8px 4px red";


     }
         };
                                    
username.onkeyup =checkInputs;                                                   
password.onkeyup = checkInputs; 


checkInputs();                                    
