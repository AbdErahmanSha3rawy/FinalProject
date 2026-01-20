const usernameValue = document.querySelector('#username');
const passwordValue = document.querySelector('#password');
let loginbtn = document.querySelector('.loginbtn');
let link = document.querySelector('.link');
let uservalue=username.value;
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


// function checkInputs() { 
  
//     if (usernameValue.value&& passwordValue.value ) {
//         loginbtn.style.opacity = "1";
//         link.style.pointerEvents = "auto"; 

//         }
//          else {
//         loginbtn.style.opacity = "0.5";
//         link.style.pointerEvents = "none"; 
//         link.style.curser = "pointer"; 

//             } 
//            if(passwordValue.value ) {
//          passwordValue.style.border="2px solid rgb(54, 245, 7)";
//         passwordValue.style.boxShadow="2px 8px 4px rgb(54, 245, 7)";

//      }  
//       else if(passwordValue.value.length === 0){
//         passwordValue.style.boxShadow="none";
//         passwordValue.style.border="2px solid black";

//      }                
//      else{
//         passwordValue.style.border="2px solid red";
//         passwordValue.style.boxShadow="2px 8px 4px red";


//      }
//       if(usernameValue.value ) {
//         usernameValue.style.border="2px solid rgb(54, 245, 7)";
//         usernameValue.style.boxShadow="2px 8px 4px rgb(54, 245, 7)";
//      }  
//      else if(usernameValue.value.length === 0){
//         usernameValue.style.border="2px solid black";
//         usernameValue.style.boxShadow="none";
//      }               
//      else{
//         usernameValue.style.border="2px solid red";
//         usernameValue.style.boxShadow="2px 8px 4px red";


//      }
//          };
                                    
// usernameValue.onkeyup =checkInputs;                                                   
// passwordValue.onkeyup = checkInputs; 


// checkInputs();                                    

function login() {
    const params = {
        "username": usernameValue.value, 
        "password": passwordValue.value
    };

    axios.post("https://tarmeezacademy.com/api/v1/login", params)
    .then((response) => {
        const token = response.data.token;
        const user = response.data.user;
        const user_id=user.id;
        localStorage.setItem("user_id",user_id)  ;

        localStorage.setItem("token", token);
           let audio_success=document.querySelector('.audio_success');
if(token){
audio_success.currentTime=0;
audio_success.play();

setTimeout(()=>{
        window.location = "../Feed Page/index.html"; 
},5000);
}

        localStorage.setItem("user", JSON.stringify(user));

    })
    .catch((error) => {
      //   const message = error.response.data.message;
      //   alert(message);
    });
}
//  loginbtn.onclick=function(){
//      const token1 = localStorage.getItem("token");
  
//  }