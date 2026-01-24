
let usernameInput = document.querySelector('#username');
let saveBtn = document.querySelector('.save');
const User_Img = localStorage.getItem("profile_image");
document.querySelector('.User_Img').src = `${User_Img}` ;
const User_Imgpr = localStorage.getItem("profile_image");
document.querySelector('.User_Imgpr').src = `${User_Imgpr}` ;

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
saveBtn.onclick = function() {
    localStorage.setItem('user_name', usernameInput.value);
    window.location.href = '../user profile/index.html';
}





const updateProfile = async () => {
    try {
        const response = await fetch('https://tarmeezacademy.com/api/v1/updatePorfile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/json',
                'Authorization': 'Bearer 82114|nmMCH0FQuxE2IvPWHtVKWuJG5rSbQGBcFdhQhpeW0ceebbe9'
            },
            body: JSON.stringify({
                username: "Abdo_Sharawey", 
                password: "password123"                
            })
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
// updateProfile();




function logout() {
    const savedData = JSON.parse(localStorage.getItem("user_info"));
    const token = localStorage.getItem("token");

    if (savedData) {
        const params = {
            "username": savedData.username,
            "password": savedData.password
        };

        const headers = {
            "Authorization":` Bearer ${token}`
        };

        axios.post("https://tarmeezacademy.com/api/v1/logout", params, { headers: headers })
        .then((response) => {
         
             setTimeout(()=>{
        window.location = "../index.html"; 
},2000);
        })
        .catch((error) => {
            console.error( error.response ? error.response.status : error.message);
        })
        .finally(() => {
            localStorage.clear();
                        
          window.location = "../index.html";
        });
    } else {
        window.location = "../index.html";
    }
}



