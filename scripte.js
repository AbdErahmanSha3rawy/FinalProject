
let post=document.querySelector('.post');
// let profile_descripe=document.querySelector('.profile_descripe');
// let img_prof=document.querySelector('.img_prof');
// let profile_name=document.querySelector('.profile_name');
// let Name=document.querySelector('.Name');
// let created_at=document.querySelector('.created_at');
// let post_descripe=document.querySelector('.post_descripe');
// let post_img=document.querySelector('.post_img');
// let actives=document.querySelector('.actives');
// let lovebtn=document.querySelector('.lovebtn');
// let lovecount=document.querySelector('.lovecount');
// let commentbtn=document.querySelector('.commentbtn');
// let commentcount=document.querySelector('.commentcount');
// let sharebtn=document.querySelector('.sharebtn');









function getposts(){

 let request= new XMLHttpRequest();
  request.open("GET","https://tarmeezacademy.com/api/v1/posts");
  request.responseType="json";
  request.send();
  request.onload = function (){
let postsr=request.response;
let postarray=postsr.data;
    for(let poste of postarray){
       let imgprofile;
      if (Object.keys(poste.author.profile_image).length !== 0){
        imgprofile=poste.author.profile_image;
       }
       else{//** */
        imgprofile='imgs/Image.png';
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
      <button class="lovebtn"><img src="imgs/love.png" alt=""></button><p class="lovecount"> ${poste.id}</p>
      <button class="commentbtn"><img src="imgs/comment.png" alt=""></button><p class="commentcount"> ${poste.comments_count}</p>
      <button class="sharebtn"><img src="imgs/share.png" alt=""></button>
      </div>  
      </div>
      <br><br>
      
      `;
    

    }
  }
}

getposts();

