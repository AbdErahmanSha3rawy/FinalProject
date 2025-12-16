// let options=document.querySelector('.options');
// let list=document.querySelector('.list');
// let post_img=document.querySelector('.post_img');
// let commentcontainer=document.querySelector('.commentcontainer');
// let commentbtn=document.querySelector('.commentbtn');
// let lovebtn=document.querySelector('.lovebtn');
// let lovecount=document.querySelector('.lovecount');

// let mode="show";
// let mode2="show";
// let mode3="show";
// let likecount=255;
// options.onclick=function() {
// if(mode !=="show"){
// list.style.display = "none";
// post_img.style.marginTop="0px";
// mode="show";
// }
// else{
// list.style.display = "block";
// post_img.style.marginTop="-150px";
// mode="hide";
// }

// }

// commentbtn.onclick=function(){

    
// if(mode2 !=="show"){
// commentcontainer.style.display = "none";

// mode2="show";
// }
// else{
//  commentcontainer.style.display="block";
// mode2="hide";
// }
   

// }


// lovebtn.onclick=function(){

    
// if(mode3 !=="show"){
//  lovebtn.src="imgs/love.png";
//  likecount --;
//  lovecount.innerText=`${likecount}`;
// mode3="show";
// }
// else{
//  lovebtn.src="imgs/lovered.svg";
//  likecount ++;
//  lovecount.innerText=`${likecount}`;
 
// mode3="hide";
// }
   

// }

// let post=document.querySelector('.post');



// function getposts(){

//  let request= new XMLHttpRequest();
//   request.open("GET","https://tarmeezacademy.com/api/v1/posts");
//   request.responseType="json";
//   request.send();
//   request.onload = function (){
//     if(request.status >=200 && request.status <300){ 
// let postsr=request.response;
// let postarray=postsr.data;
//     for(let poste of postarray){
//        let imgprofile;
//       if (Object.keys(poste.author.profile_image).length !== 0){
//         imgprofile=poste.author.profile_image;
//        }
//        else{//** */
//         imgprofile='imgs/Image.png';
//       }
//        let imgpost='';
//       if (Object.keys(poste.image).length !== 0){

//         imgpost=poste.image;
//        }
//        else{
//         imgpost="imgs/Image_Post.png";
//       }
//       let Email='';
//       if(poste.author.email!=null){
//          Email=poste.author.email;
//       }
//       else{
//         Email="AbdElrahman@gmail.com";
//       }
      

//       post.innerHTML +=   `
    
// <div class="profile_descripe">

//     <div class="profile_descripe2">
// <img src="${imgprofile}" alt="">
// <div class="profile_name">
//     <p class="Name">${poste.author.username}</p>
//     <p class="email">${Email}</p>
//         <p class="created_at">${poste.created_at}</p>
// </div>
// </div>
//  <button class="options"><img src="imgs/options.svg" alt=""></button>
// </div>

//       <p class="post_descripe">${poste.body}</p>
//         <div class="list">
// <a class="Edit" href=""><img src="imgs/etdi.png" alt="">Edit Post</a><br><br>
// <a class="Delete" href=""><img src="imgs/delete.png" alt="">Delete Post</a><br><br>
// <a class="Share" href=""><img src="imgs/share(2).png" alt="">Share</a>

//         </div>

//       <img class="post_img" src="${imgpost}">

// <div class="actives">
//  <button class="lovebtn"><img src="imgs/love.png" alt=""></button><p class="lovecount"> ${poste.id}</p>
//       <button class="commentbtn"><img src="imgs/comment.png" alt=""></button><p class="commentcount"> ${poste.comments_count}</p>
// <button><img src="imgs/share.png" alt=""></button>
// </div>
// <div class="commentcontainer">
//  <div class="add_comment">
// <img src="imgs/Image (Ahmed Mohamed).png" alt="">
// <input type="text" name="" id="" placeholder="Write a comment...">
// <button type="submit">post</button>
// </div>
// <div class="comment">
// <div class="comment_content"><img src="imgs/Image (Ahmed Mohamed).png" alt="">
// <p>mkefrgjmnesfjvbnb</p></div><br>
// <div class="react">
// <p>Now</p>
// <button><img src="imgs/love.png" alt=""></button><p>Like</p>
// </div>
// </div>
// </div>
//  </div> 

    
//       `;

//     }
//   }
//   else{
//     alert("Errorrrrr");
//   }
//   }
// }

// getposts();



let postContainer = document.querySelector('.post');


document.addEventListener('click', function(e) {
    let postDiv = e.target.closest('.post'); 
     if (!postDiv) return; 

    
    if (e.target.closest('.options')) {
        let list = postDiv.querySelector('.list');
        let postImg = postDiv.querySelector('.post_img');
        if (list.style.display === "block") {
            list.style.display = "none";
            postImg.style.marginTop = "0px";
        } else {
            list.style.display = "block";
            postImg.style.marginTop = "-150px";
        }
    }

    
    if (e.target.closest('.commentbtn')) {
        let commentContainer = postDiv.querySelector('.commentcontainer');
        if (commentContainer.style.display === "block") {
            commentContainer.style.display = "none";
        } else {
            commentContainer.style.display = "block";
        }
    }

    
    if (e.target.closest('.lovebtn')) {
        let loveBtn = postDiv.querySelector('.lovebtn img');
        let lovecount = postDiv.querySelector('.lovecount');
        let count = parseInt(lovecount.innerText) ;

        if (loveBtn.src.includes("lovered.svg")) {
            loveBtn.src = "imgs/love.png";
            lovecount.innerText = count - 1;
        } else {
            loveBtn.src = "imgs/lovered.svg";
            lovecount.innerText = count + 1;
        }
    }
});


function getposts() {
    let request = new XMLHttpRequest();
    request.open("GET", "https://tarmeezacademy.com/api/v1/posts");
    request.responseType = "json";
    request.send();
    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            let postsr = request.response;
            let postarray = postsr.data;
            for (let poste of postarray) {
                 let imgprofile;
      if (Object.keys(poste.author.profile_image).length !== 0){
        imgprofile=poste.author.profile_image;
       }
       else{
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
      


                postContainer.innerHTML += `
<div class="post">
    <div class="profile_descripe">
        <div class="profile_descripe2">
            <img src="${imgprofile}" alt="">
            <div class="profile_name">
                <p class="Name">${poste.author.username}</p>
                <p class="email">${Email}</p>
                <p class="created_at">${poste.created_at}</p>
            </div>
        </div>
        <button class="options"><img src="imgs/options.svg" alt=""></button>
    </div>
    <p class="post_descripe">${poste.body}</p>
    <div class="list" style="display:none;">
        <a class="Edit" href=""><img src="imgs/etdi.png" alt="">Edit Post</a><br><br>
        <a class="Delete" href=""><img src="imgs/delete.png" alt="">Delete Post</a><br><br>
        <a class="Share" href=""><img src="imgs/share(2).png" alt="">Share</a>
    </div>
    <img class="post_img" src="${imgpost}">
    <div class="actives">
        <button class="lovebtn"><img src="imgs/love.png" alt=""></button>
        <p class="lovecount">${poste.id }</p>
        <button class="commentbtn"><img src="imgs/comment.png" alt=""></button>
        <p class="commentcount">${poste.comments_count}</p>
        <button><img src="imgs/share.png" alt=""></button>
    </div>
    <div class="commentcontainer" style="display:none;">
        <div class="add_comment">
            <img src="imgs/Image (Ahmed Mohamed).png" alt="">
            <input type="text" placeholder="Write a comment...">
            <button type="submit">post</button>
        </div>
<div class="comment">
            <div class="comment_content">
                <img src="imgs/Image (Ahmed Mohamed).png" alt="">
                <p>mkefrgjmnesfjvbnb</p>
            </div><br>
            <div class="react">
                <p>Now</p>
                <button><img src="imgs/love.png" alt=""></button>
                <p>Like</p>
            </div>
        </div>
    </div>
</div>`;
            }
        } else {
            alert("Error loading posts");
        }
    };
}

getposts();

let text=document.querySelector('.text');
let text_value=text.value;
let img_of_new_post=document.querySelector('.img_of_new_post');
let img_src=img_of_new_post.src;
let postbtn=document.querySelector('.postbtn');



