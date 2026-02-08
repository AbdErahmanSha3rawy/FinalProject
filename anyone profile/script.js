let post_counter=0;
let menu_icon=document.querySelector('.menu_icon');
let menu=document.querySelector('.menu');
let elaicona=document.querySelector('.elaicona');
let follow=document.querySelector('.Follow');
let nom_followers=document.querySelector('.nom_followers');
let mood=0;
let followers_count=parseInt(nom_followers.innerText);

follow.onclick=function(){
if(mood===0){
following();
followers_count++;
mood=1;
}
else{
follow.innerText="follow";
follow.style.background="#AD46FF";
followers_count--;
mood=0;
    
}
}
nom_followers.innerText=parseInt(followers_count);
function following(){
follow.innerText="following";
follow.style.background="#5ea9ff";
}

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

const backgroundimg = localStorage.getItem("background_Img");

let background_img=document.querySelector('.background_img');
if(backgroundimg){ 

background_img.src=backgroundimg;

}
else{
 background_img.src="imgs/myprofile.png";   
}
const profile_image = localStorage.getItem("elimage");
document.querySelector('.User_Img').src = `${profile_image}` ;

document.querySelector('.imgy').src = `${profile_image}` ;

const myname=localStorage.getItem("elName");
document.querySelector('.Name_user').innerText=`${myname}`;

const myusername=localStorage.getItem("elusername");
document.querySelector('.username').innerText=`${myusername}`;

const elcounter=localStorage.getItem("counter");
document.querySelector('.posts_nom').innerText=`${elcounter}`;

function formatMonthYear(dateString) {
    const date = new Date(dateString);
       
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const monthName = months[date.getMonth()]; 
    const year = date.getFullYear();

    return `${monthName} ${year}`;
}

const createdAt=localStorage.getItem("profile_CreatedAt");
document.querySelector('.profile_CreatedAt').innerText=formatMonthYear(createdAt);


document.addEventListener('click', function(e) {
    let postDiv = e.target.closest('.post'); 
     if (!postDiv) return; 
let moood;
     
    if (e.target.closest('.options')) {
        let list = postDiv.querySelector('.list');
        let postImg = postDiv.querySelector('.post_img');
        if (list.style.display === "block") {
            list.style.display = "none";
            postImg.style.marginTop = "0px";
        } 
        
        else {

            list.style.display = "block";
            postImg.style.marginTop = "-40px";
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

      let audio_like=document.querySelector('.audio_like');

        let loveBtn = postDiv.querySelector('.lovebtn img');
        let lovecount = postDiv.querySelector('.lovecount');
        let count = parseInt(lovecount.innerText) ;
 if (e.target.closest('.lovebtn') ){
if (!loveBtn.src.includes("love.svg") ) {
            loveBtn.src = "imgs/love.svg";
            lovecount.innerText = count - 1 ;
           
        } 
        else {
            loveBtn.src = "imgs/lovered.svg";
            lovecount.innerText = count + 1;
audio_like.currentTime=0;
audio_like.play();
        }

 }
    if ( e.target.closest('.love_emoji')) {
       

        if (loveBtn.src.includes("lovered.svg")) {
            loveBtn.src = "imgs/love.svg";
            lovecount.innerText = count - 1;
        } 
         else if (!loveBtn.src.includes("love.svg") ) {
            loveBtn.src = "imgs/lovered.svg";
            lovecount.innerText = count ;
            audio_like.currentTime=0;
audio_like.play();
        } 
        else {
            loveBtn.src = "imgs/lovered.svg";
            lovecount.innerText = count + 1;
audio_like.currentTime=0;
audio_like.play();
        }
    }
 if ( e.target.closest('.laugh_emoji')) {
        

        if (loveBtn.src.includes("laugh.svg") ) {
            loveBtn.src = "imgs/love.svg";
            lovecount.innerText = count - 1;
        } 
          else if (!loveBtn.src.includes("love.svg") ) {
            loveBtn.src = "imgs/laugh.svg";
            lovecount.innerText = count ;
            audio_like.currentTime=0;
audio_like.play();
        } 
        else {
            loveBtn.src = "imgs/laugh.svg";
            lovecount.innerText = count + 1;
audio_like.currentTime=0;
audio_like.play();
        }
    }
    if ( e.target.closest('.sad_emoji')) {
      

        if (loveBtn.src.includes("sad.svg") ) {
            loveBtn.src = "imgs/love.svg";
            lovecount.innerText = count - 1;
        } 
        else if (!loveBtn.src.includes("love.svg") ) {
            loveBtn.src = "imgs/sad.svg";
            lovecount.innerText = count ;
            audio_like.currentTime=0;
audio_like.play();
        } 
        else {
            loveBtn.src = "imgs/sad.svg";
            lovecount.innerText = count + 1;
audio_like.currentTime=0;
audio_like.play();
        }
    }
if ( e.target.closest('.angry_emoji')) {
      

        if (loveBtn.src.includes("angry.svg") ) {
            loveBtn.src = "imgs/love.svg";
            lovecount.innerText = count - 1;
        } 
          else if (!loveBtn.src.includes("love.svg") ) {
            loveBtn.src = "imgs/angry.svg";
            lovecount.innerText = count ;
            audio_like.currentTime=0;
            audio_like.play();
        } 
        else {
            loveBtn.src = "imgs/angry.svg";
            lovecount.innerText = count + 1;
audio_like.currentTime=0;
audio_like.play();
        }
    }


    if (e.target.closest('.add_comment_btn')) {
    let postDiv = e.target.closest('.post');
    let lovecount = postDiv.querySelector('.lovecount');
    let id = lovecount.innerHTML;

    let Write_comment = postDiv.querySelector('.Write_comment'); 
    let Elcomment = postDiv.querySelector('.Elcomment'); 
    let comment = postDiv.querySelector('.comment'); 
    comment.style.display="block";

    Elcomment.innerText=Write_comment.value;    
createComment(id,Elcomment.innerText);
    Write_comment.value='';
    }

});
const getUserPosts = async () => {

  const userId = localStorage.getItem("elpostid");
  const postContainer = document.querySelector(".postContainer");
let elpostid=localStorage.getItem("elpostid");

  if (!postContainer) return;
  const url = `https://tarmeezacademy.com/api/v1/users/${elpostid}/posts?sortBy=created_at&orderBy=desc`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      return;
    }

    const postarray = result.data;
    postContainer.innerHTML = "";
    post_counter = 0;
 
let user_name=localStorage.getItem("user_name");
let profile_image=localStorage.getItem("profile_image");
 let imgpost;
 let background_Img;
    for (let poste of postarray) {
      post_counter++;
     if( typeof poste.image ==='string'){
        imgpost=poste.image    ;
     }
     else{
        imgpost="";
     }

const imgprofile = localStorage.getItem("elimage");
      postContainer.innerHTML += `
       
<div class="post" id="post-${poste.id}">
<span class="posteid">${poste.author.id}</span>

    <div class="profile_descripe">
        <div class="profile_descripe2">
            <img src="${imgprofile}" class="img_prof" alt="">
            <div class="profile_name">
                <p class="Name">${poste.author.name}</p>
             <div class="username_created_at">

                <p class="username">@${poste.author.username}</p>
                <p>" "</p>
                <p class="created_at">${poste.created_at}</p>
                </div>
            </div>
        </div>
        <button class="options"><img src="imgs/options.svg" alt=""></button>
    </div>
   
    <p class="post_descripe">${poste.body}</p>
    <div class="list" style="display:none;">
      
        <a class="Share" href=""><img src="imgs/share.png" alt="">Share</a>
    </div>
    <img class="post_img" src="${imgpost}">
    <div class="actives">
        <button class="lovebtn"><img src="imgs/love.svg" alt=""></button>
        <p class="lovecount">${poste.id}</p>
        <button class="commentbtn"><img src="imgs/comment.svg" alt=""></button>
        <p class="commentcount">${poste.comments_count}</p>
        <button class="sharebtn"><img src="imgs/share.svg" alt=""></button>
        <div class="Emojies">
        <button class="love_emoji"><img src="imgs/lovered.svg" alt=""></button>
        <button class="laugh_emoji"><img src="imgs/laugh.svg"></button>
        <button class="sad_emoji"><img src="imgs/sad.svg" alt=""></button>
        <button class="angry_emoji"><img src="imgs/angry.svg" alt=""></button>
        </div>
    </div>
    <div class="commentcontainer" style="display:none;">
        <div class="add_comment">
            <img src="${profile_image}" alt="">
            <input type="text" class="Write_comment" placeholder="Write a comment...">
            <button type="submit" class="add_comment_btn">post</button>
        </div>
<div class="comment">
            <div class="comment_content">
                <img class="comment_img" src="${profile_image}" alt="">
                <div class="commenty">
                <p  class="username_comment">${user_name}</p>
                <p class="Elcomment"></p>
                </div>
                </div>
            <br>
            <div class="react">
                <p>Now</p>
                <button><img src="imgs/love.svg" alt=""></button>
                <p>Like</p>
            </div>
        </p>
    </div>
</div>`;
    background_Img=poste.image;
    }
    localStorage.setItem("background_Img", background_Img);

    localStorage.setItem("counter", post_counter);

  } catch (error) {
    console.error("Fetch error:", error);
  }
};

getUserPosts();




const createComment = async (id,Elcomment) => {
   

  try {   
    const response = await fetch(`https://tarmeezacademy.com/api/v1/posts/${id}/comments`, {
      method: 'POST',
      body: JSON.stringify({

   
        body:  Elcomment
      
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':'Bearer 82809|JhfhYvwp98wdrkSHlDjwedGILiyZjP9YNzaE3JKI7a6230a4'
      },
    });

    const data = await response.json();
    console.log('', data);
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
};


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


let Mediabtn=document.querySelector('.Mediabtn');
Mediabtn.onclick=function(){
document.querySelector('.postContainer').style.display="none";
let Mediabtn=document.querySelector('.Mediabtn');
Mediabtn.style.backgroundImage="linear-gradient(90deg,#AD46FF,#F6339A)"
Mediabtn.style.color="white"

let Postsbtn=document.querySelector('.Postsbtn');
Postsbtn.style.background="none";
Postsbtn.style.color="#4A5565";
getUserimgs();

}
let Postsbtn=document.querySelector('.Postsbtn');
Postsbtn.onclick=function(){

        window.location = "../anyone profile/index.html"; 

}
const getUserimgs = async () => {

  
  const media = document.querySelector(".media");
let elpostid=localStorage.getItem("elpostid");

  const url = `https://tarmeezacademy.com/api/v1/users/${elpostid}/posts?sortBy=created_at&orderBy=desc`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result);
      return;
    }

    const postarray = result.data;
    media.innerHTML = "";
    post_counter = 0;
 

    for (let poste of postarray) {
      post_counter++;
      let imgpost ;
  if( typeof poste.image ==='string'){
       imgpost = poste.image;
             media.innerHTML += `
           <img class="post_img" src="${imgpost}">
`;
   
}}
    localStorage.setItem("counter", post_counter);

  } catch (error) {
    console.error("Fetch error:", error);
  }
};
