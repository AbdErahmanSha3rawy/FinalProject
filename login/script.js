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
        
            const name=user.name;
        localStorage.setItem("name",name)  ;

        const user_name=user.username;
        localStorage.setItem("user_name",user_name)  ;
const profile_image=user.profile_image;
        localStorage.setItem("profile_image",profile_image)  ;
        
           let audio_success=document.querySelector('.audio_success');
if(token){
audio_success.currentTime=0;
audio_success.play();
loginbtn.style.background="#47f750";
loginbtn.innerText="Successful ✨🎉";


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
