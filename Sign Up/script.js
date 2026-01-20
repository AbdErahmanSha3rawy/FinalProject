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
                    window.location = "../Feed Page/index.html"; 

        })
        .catch((error) => {
            console.log(error.response.data);
        });
}
