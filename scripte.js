  const loader_general = document.getElementById('loader_general');

  if (loader_general) loader_general.style.display = "flex";

window.addEventListener('load', function() {
    
    loader_general.style.opacity = '0';
    setTimeout(() => {
        loader_general.style.display = 'none';
    }, 500);
});
let post=document.querySelector('.post');
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

function getposts() {
  const loader = document.getElementById('loader-wrapper');

  if (loader) loader.style.display = "flex";

  let request = new XMLHttpRequest();
  request.open("GET", "https://tarmeezacademy.com/api/v1/posts");
  request.responseType = "json";
  request.send();

  request.onload = function () {
    if (loader) loader.style.display = "none";

    if (request.status >= 200 && request.status < 300) {
      let postsr = request.response;
      let postarray = postsr.data;

      post.innerHTML = "";

      for (let poste of postarray) {
        let imgprofile = (poste.author.profile_image && Object.keys(poste.author.profile_image).length !== 0) 
                         ? poste.author.profile_image 
                         : 'imgs/myprofile.png';

          let imgpost = "";
        if (poste.image && Object.keys(poste.image).length !== 0) {
          imgpost = `<img class="post_img" src="${poste.image}">`;
        }

        let space = ". / .";
        
        post.innerHTML += `
          <div class="container">
            <div class="profile_descripe">
              <img src="${imgprofile}" class="img_prof" alt="">
              <div class="profile_name">
                <p class="Name">${poste.author.name}</p>
                <div class="username_created_at">
                  <p class="username">${poste.author.username}</p>
                  <p>${space}</p>
                  <p class="created_at">${poste.created_at}</p>
                </div>
              </div>
            </div>
            <p class="post_descripe">${poste.body}</p>
            ${imgpost} 
            <div class="actives">
              <button class="lovebtn"><img src="imgs/love.svg" alt=""></button>
              <p class="lovecount"> ${poste.id}</p>
              <button class="commentbtn"><img src="imgs/comment.svg" alt=""></button>
              <p class="commentcount"> ${poste.comments_count}</p>
              <button class="sharebtn"><img src="imgs/share.svg" alt=""></button>
            </div>  
          </div>
          <br><br>
        `;
      }
    } else {
      alert("Error loading posts");
    }
  };

  request.onerror = function () {
    if (loader) loader.style.display = "none";
    alert("Network Error");
  };
}

getposts();