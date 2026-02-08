const usernameValue = document.querySelector('#username');
const passwordValue = document.querySelector('#password');
 localStorage.setItem("passwordValue",passwordValue)  ;

let loginbtn = document.querySelector('.loginbtn');
let link = document.querySelector('.link');
let uservalue=username.value;
let menu_icon=document.querySelector('.menu_icon');
let menu=document.querySelector('.menu');
   let elaicona=document.querySelector('.elaicona');

menu_icon.onclick = function() {
    elaicona.style.transition = "opacity 0.3s";
    elaicona.style.opacity = 0;

    setTimeout(() => {
        if(menu.style.display === "block"){
            menu.style.display = "none";
            elaicona.src = 'imgs/menu.svg';
        } else {
            menu.style.display = "block";
            elaicona.src = 'imgs/elaicona.svg';
        }

        elaicona.style.opacity = 1;
    }, 400); 
}


function login() {
    const params = {
        "username": usernameValue.value, 
        "password": passwordValue.value
    };

    axios.post("https://tarmeezacademy.com/api/v1/login", params)
    .then((response) => {
        localStorage.setItem("user_info",
JSON.stringify({
username: usernameValue.value,
password: passwordValue.value
})

        )
        const token = response.data.token;
        const user = response.data.user;
        const user_id=user.id;
        localStorage.setItem("user_id",user_id)  ;
        
        const Account_Id=response.data.id;
        localStorage.setItem("Account_Id",Account_Id)  ;
         console.log("id of post is : "+Account_Id);
        localStorage.setItem("token",token);
        
            const name=user.name;
        localStorage.setItem("name",name)  ;

        const user_name=user.username;
        localStorage.setItem("user_name",user_name)  ;
let profile_image;
if(user.profile_image.length >0){
profile_image=user.profile_image;
}    
else{
        profile_image="imgs/unknown.jpg";
}
        localStorage.setItem("profile_image",profile_image)  ;
        
if(token){

loginbtn.style.background="#47f750";
loginbtn.innerText="Successful ✨🎉";

console.log("Token saved successfully:", token);
setTimeout(()=>{
        window.location = "../Feed Page/index.html"; 
},5000);
}
else{
     console.error("Token not found in response!");   
}
        localStorage.setItem("user", JSON.stringify(user));

    })
    .catch((error) => {
      //   const message = error.response.data.message;
      //   alert(message);
    });
}
