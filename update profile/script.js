
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');

let saveBtn = document.querySelector('.save');
const User_Img = localStorage.getItem("profile_image");
document.querySelector('.User_Img').src = `${User_Img}` ;
const User_Imgpr = localStorage.getItem("profile_image");
document.querySelector('.User_Imgpr').src = `${User_Imgpr}` ;

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

saveBtn.onclick = function() {
  updateProfile();
  setTimeout(()=>{
        window.location = "../user profile/index.html"; 
},5000);
}





const updateProfile = async () => {
        const token = localStorage.getItem("token");

    try {
        const response = await fetch('https://tarmeezacademy.com/api/v1/updateporfile', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
            "Authorization":` Bearer ${token}`
            },
            body: JSON.stringify({
                username: usernameInput.value, 
                password: passwordInput.value                
            })
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}




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
},4000);
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



