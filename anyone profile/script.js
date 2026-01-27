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
follow.innerText="Unfollow";
follow.style.background="#5ea9ff";
}


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
        else if(moood===5){
            
            list.style.display = "none";

        }
        else {

            list.style.display = "block";
            postImg.style.marginTop = "-120px";
        }
    }
    if (e.target.closest('.Delete')) {
        let postdiv=postDiv.querySelector('.post');
        let lovecount = postDiv.querySelector('.lovecount');
        let id=lovecount.innerHTML;
        deletePost(id);
        postDiv.querySelector('.list').style.display="none";
        postDiv.querySelector('.post_img').style.marginTop = "0px";
    }
    
         

if (e.target.closest('.Edit')) {
    let postDiv = e.target.closest('.post');
    let lovecount = postDiv.querySelector('.lovecount');
    let id = lovecount.innerHTML;
    console.log(id);

    let post_describe = postDiv.querySelector('.post_descripe'); 
    let textarea = postDiv.querySelector('.text'); 
    
        textarea.value = post_describe.innerText.trim(); 


    postDiv.querySelector('.list').style.display = "none";
    postDiv.querySelector('.post_img').style.marginTop = "0px";
    postDiv.querySelector('.Eidt_Area').style.display = "flex";
    postDiv.querySelector('.post_descripe').style.display = "none";
    moood=5;

}

if (e.target.closest('.Savebtn')) {
    let postDiv = e.target.closest('.post');
    let lovecount = postDiv.querySelector('.lovecount');
    let id = lovecount.innerHTML;
    let textarea = postDiv.querySelector('.text');

 let text_value=textarea.value;
const formData = new FormData();
        formData.append("body",text_value);
   
    updatePost(id,formData);

    
    postDiv.querySelector('.post_descripe').style.display = "block";
    postDiv.querySelector('.Eidt_Area').style.display = "none";
} 


  
if (e.target.closest('.Cancelbtn')) {
    let postDiv = e.target.closest('.post');


    postDiv.querySelector('.post_descripe').style.display = "block";
    
    postDiv.querySelector('.Eidt_Area').style.display = "none";


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
let page = 1;             
let isLoading = false;    
let lastPage = false;     

const getUserPosts = async () => {
    if (isLoading || lastPage) return;   
isLoading = true;

      let loader = document.getElementById('loader-wrapper');

  if (loader) loader.style.display = "flex";
    const user = JSON.parse(localStorage.getItem("user"));

        const userId = localStorage.getItem("elpostid");

    const token = localStorage.getItem("token");

    const postContainer = document.querySelector(".postContainer");

    if (!postContainer) {
        console.error("postContainer not found");
        return;
    }
  let post_CreatedAt=localStorage.getItem("post_CreatedAt");
const url = `https://tarmeezacademy.com/api/v1/users/${userId}/posts?&page=${page}&sortBy=created_at&orderBy=desc`;

    try {
        const response = await fetch(url, {
     
        
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`

            }
        });

        const result = await response.json();

        if (!response.ok) {
            console.log(result);
            return;
        }

        const postarray = result.data;
        postContainer.innerHTML = "";
             let load = document.getElementById('loader-wrapper');

            if (load) load.style.display = "none";
        for (let poste of postarray) {
        post_counter++;
            let imgprofile;
             imgprofile = localStorage.getItem("profile_image");

localStorage.setItem("imgprofile", imgprofile);      
 let imgpost='';
      if (Object.keys(poste.image).length !== 0){

        imgpost=poste.image;
       }
       else{
        // document.querySelector('.post_img').style.display="none";
      }
        localStorage.setItem("Name",poste.author.name);
        localStorage.setItem("User_Name",poste.author.username);
        localStorage.setItem("profile_CreatedAt",poste.author.created_at);
        localStorage.setItem("post_CreatedAt",poste.created_at);



   
let space="/..";
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
                <p>${space}</p>
                <p class="created_at">${poste.created_at}</p>
                </div>
            </div>
        </div>
        <button class="options"><img src="imgs/options.svg" alt=""></button>
    </div>
    <div class=" Eidt_Area">
  <form action="">
<textarea name="" id="" placeholder="What's on your mind?" class="text"></textarea><br>
<div class="btns">
<button type="button" class="Savebtn">Save</button>
<button type="button" class="Cancelbtn">Cancel</button>


</div>
</form>
</div>
    <p class="post_descripe">${poste.body}</p>
    <div class="list" style="display:none;">
        <button class="Edit" href=""><img src="imgs/etdi.png" alt="">Edit Post</button><br><br>
        <button class="Delete" href=""><img src="imgs/delete.png" alt="">Delete Post</button><br><br>
        <a class="Share" href=""><img src="imgs/share(2).png" alt="">Share</a>
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
            <img src="${imgprofile}" alt="">
            <input type="text" class="Write_comment" placeholder="Write a comment...">
            <button type="submit" class="add_comment_btn">post</button>
        </div>
<div class="comment">
            <div class="comment_content">
                <img class="comment_img" src="${imgprofile}" alt="">
                <div class="commenty">
                <p  class="username_comment">${poste.author.username}</p>
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
            }
       page++;          
isLoading = false; 
     
            localStorage.setItem("counter",post_counter);
    }
     catch (error) {
        console.error(error);
    }
    
};

getUserPosts();
window.addEventListener("scroll", function () {
    if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150
    ) {
        getUserPosts();  
    }
});

function deletePost(id) {
     let token=localStorage.getItem("token");
    let request = new XMLHttpRequest();
    request.open("DELETE", `https://tarmeezacademy.com/api/v1/posts/${id}`);
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization",` Bearer ${token}`); 

   
    request.send();

    request.onload = function() {
        if(request.status >= 200 && request.status < 300) {
  
    const post=document.getElementById(`post-${id}`);
    post.remove();

        } else {
           
        }
    }
}


function updatePost(id,formData) {
     let token=localStorage.getItem("token");
    let request = new XMLHttpRequest();
    request.open("POST", `https://tarmeezacademy.com/api/v1/posts/${id}`);
    request.responseType = "json";
    
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization",` Bearer ${token}`); 

   
    

    formData.append("_method", "put");
    request.send(formData);


    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
let updated_post=request.response.data;
const new_post=document.getElementById(`post-${id}`);
new_post.querySelector('.post_descripe').innerText=updated_post.body;

        } else {
            console.error(request.response);
        }
    };

}



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