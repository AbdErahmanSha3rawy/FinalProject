
let usernameInput = document.querySelector('#username');
let saveBtn = document.querySelector('.save');

saveBtn.onclick = function() {
    localStorage.setItem('user_name', usernameInput.value);
    window.location.href = '../user profile/index.html';
}










