
let usernameInput = document.querySelector('#username');
let saveBtn = document.querySelector('.save');
const User_Img = localStorage.getItem("imgprofile");
document.querySelector('.User_Img').src = `${User_Img}` ;
const User_Imgpr = localStorage.getItem("imgprofile");
document.querySelector('.User_Imgpr').src = `${User_Imgpr}` ;


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





