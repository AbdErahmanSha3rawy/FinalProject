let post_counter=0;
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
const User_Img = localStorage.getItem("imgprofile");
document.querySelector('.User_Img').src = `${User_Img}` ;

const myProfileImage = localStorage.getItem("imgprofile");
document.querySelector('.imgy').src = `${myProfileImage}` ;

const myname=localStorage.getItem("Name");
document.querySelector('.Name_user').innerText=`${myname}`;
const myusername=localStorage.getItem("User_Name");
document.querySelector('.username').innerText=`${myusername}`;
const elcounter=localStorage.getItem("counter");
document.querySelector('.posts_nom').innerText=`${elcounter}`;
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
        console.log(id);
        deletePost(id);
        postDiv.querySelector('.list').style.display="none";
            postDiv.querySelector('.post_img').style.marginTop = "0px";
getposts();
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

    
    if (e.target.closest('.lovebtn')) {
        let loveBtn = postDiv.querySelector('.lovebtn img');
        let lovecount = postDiv.querySelector('.lovecount');
        let count = parseInt(lovecount.innerText) ;

        if (loveBtn.src.includes("lovered.svg")) {
            loveBtn.src = "imgs/love.svg";
            lovecount.innerText = count - 1;
        } else {
            loveBtn.src = "imgs/lovered.svg";
            lovecount.innerText = count + 1;
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
      let loader = document.getElementById('loader-wrapper');

  if (loader) loader.style.display = "flex";
    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user.id;
    const token = localStorage.getItem("token");

    const postContainer = document.querySelector(".postContainer");

    if (!postContainer) {
        console.error("postContainer not found");
        return;
    }

    const url = `https://tarmeezacademy.com/api/v1/users/${userId}/posts?sortBy=created_at&orderBy=desc`;

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
      if (Object.keys(poste.author.profile_image).length !== 0){
        imgprofile=poste.author.profile_image;
       }
       else{
        imgprofile='imgs/Image (Ahmed Mohamed).png';
      }
 
localStorage.setItem("imgprofile", imgprofile);       let imgpost='';
      if (Object.keys(poste.image).length !== 0){

        imgpost=poste.image;
       }
       else{
        // document.querySelector('.post_img').style.display="none";
      }
        localStorage.setItem("Name",poste.author.name);
        localStorage.setItem("User_Name",poste.author.username);

   
let space="/..";
                postContainer.innerHTML += `
                
<div class="post">
    <div class="profile_descripe">
        <div class="profile_descripe2">
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
        <button><img src="imgs/share.svg" alt=""></button>
    </div>
    <div class="commentcontainer" style="display:none;">
        <div class="add_comment">
            <img src="imgs/Image (Ahmed Mohamed).png" alt="">
            <input type="text" class="Write_comment" placeholder="Write a comment...">
            <button type="submit" class="add_comment_btn">post</button>
        </div>
<div class="comment">
            <div class="comment_content">
                <img class="comment_img" src="imgs/Image (Ahmed Mohamed).png" alt="">
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
            localStorage.setItem("counter",post_counter);
    }
     catch (error) {
        console.error(error);
    }
    request.onerror = function () {
    if (loader) loader.style.display = "none";
    alert("Network Error");
  };
};

getUserPosts();

function deletePost(item) {
     let id=item;
    let request = new XMLHttpRequest();
    request.open("DELETE", `https://tarmeezacademy.com/api/v1/posts/${id}`);
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    request.setRequestHeader("Authorization", "Bearer 82809|JhfhYvwp98wdrkSHlDjwedGILiyZjP9YNzaE3JKI7a6230a4"); 

   
    request.send();

    request.onload = function() {
        if(request.status >= 200 && request.status < 300) {
            getposts();
        } else {
           
        }
    }
}


function updatePost(id,formData) {
    let request = new XMLHttpRequest();
    request.open("POST", `https://tarmeezacademy.com/api/v1/posts/${id}`);
    request.responseType = "json";
    
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", "Bearer 82809|JhfhYvwp98wdrkSHlDjwedGILiyZjP9YNzaE3JKI7a6230a4");

   
    

    formData.append("_method", "put");
    request.send(formData);


    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            // getposts();
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