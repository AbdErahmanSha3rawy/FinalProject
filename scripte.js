
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



function getposts(){

 let request= new XMLHttpRequest();
  request.open("GET","https://tarmeezacademy.com/api/v1/posts");
  request.responseType="json";
  request.send();
  request.onload = function (){
    if(request.status >=200 && request.status <300){ 
let postsr=request.response;
let postarray=postsr.data;
    for(let poste of postarray){
       let imgprofile;
      if (Object.keys(poste.author.profile_image).length !== 0){
        imgprofile=poste.author.profile_image;
       }
       else{//** */
        imgprofile='imgs/myprofile.png';
      }
       let imgpost='';
      if (Object.keys(poste.image).length !== 0){

        imgpost=poste.image;
       }
       else{
        imgpost="imgs/Image_Post.png";
      }
      let Email='';
      if(poste.author.email!=null){
         Email=poste.author.email;
      }
      else{
        Email="AbdElrahman@gmail.com";
      }
      
      
      post.innerHTML +=   `
      <div class="container">
      <div class="profile_descripe">

<img src="${imgprofile}" class="img_prof"  alt="">
    
<div class="profile_name">
    <p class="Name">${poste.author.username}</p>
    <p class="email">${Email}</p>
        <p class="created_at">${poste.created_at}</p>
</div>
</div>
      <p class="post_descripe">${poste.body}</p>
      <img class="post_img" src="${imgpost}">
      <div class="actives">
      <button class="lovebtn"><img src="imgs/love.svg" alt=""></button><p class="lovecount"> ${poste.id}</p>
      <button class="commentbtn"><img src="imgs/comment.svg" alt=""></button><p class="commentcount"> ${poste.comments_count}</p>
      <button class="sharebtn"><img src="imgs/share.svg" alt=""></button>
      </div>  
      </div>
      <br><br>
      
      `;
    

    }
  }
  else{
    alert("Errorrrrr");
  }
  }
}

getposts();

