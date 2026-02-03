let Create_Account=document.querySelector('.Create_Account');
        // Create_Account.style.opacity = "0.5";
        // link.style.pointerEvents = "none"; 
        // link.style.cursor= "pointer"; 
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
let Full_Name=document.querySelector('#Full_Name');
let username=document.querySelector('#username');
let Email=document.querySelector('#Email');
let password=document.querySelector('#password');
let Profile_Image2=document.querySelector('#Profile_Image2');

Create_Account.onclick=function(){

        register();
  
   
}

function register() {

    const formData = new FormData();
    formData.append("name", Full_Name.value);
    formData.append("username", username.value);
    formData.append("email", Email.value);
    formData.append("password", password.value);
   if (Profile_Image2.files.length > 0) {
    formData.append("image", Profile_Image2.files[0]);

}


 axios.post(
        "https://tarmeezacademy.com/api/v1/register",
        formData
    )    
     .then((response) => {
         
  localStorage.setItem("user_info",
JSON.stringify({
username: username.value,
password: password.value
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
setTimeout(()=>{
        window.location = "../Feed Page/index.html"; 
},1000);
        })
        .catch((error) => {
            console.log(error.response.data);
        });
}
