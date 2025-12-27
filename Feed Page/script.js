

let postContainer = document.querySelector('.postContainer');
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
        imgprofile='imgs/Image (Ahmed Mohamed).png';
      }
       let imgpost='';
      if (Object.keys(poste.image).length !== 0){

        imgpost=poste.image;
       }
       else{
        document.querySelector('.post_img').style.display="none";
      }
  

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
        <p class="lovecount">${poste.id }</p>
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
        } else {
            alert("Error loading posts");
        }
    };

}


let text=document.querySelector('.text');
let img_of_new_post=document.querySelector('.img_of_new_post');
let postbtn=document.querySelector('.postbtn');
 text.onkeyup = function() {
    if (text.value.length > 0) {
        postbtn.style.opacity = "1"; 
        postbtn.disabled = false;
    } else {
        postbtn.style.opacity = "0.5"; 
        postbtn.disabled = true;
    }
};

postbtn.onclick=function(){
const text_value=text.value;
 const file = img_of_new_post.files[0]; 
        const formData = new FormData();
        formData.append("body",text_value);

    if (file) {
        formData.append("image",file);
    }
   
            
            createPost(formData);
text.value='';
   postbtn.style.opacity = "0.5"; 
        postbtn.disabled = true;    
// getposts();
        };

  
function createPost(formData) {
 
    let request = new XMLHttpRequest();
    request.open("POST", "https://tarmeezacademy.com/api/v1/posts");
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
     const token = localStorage.getItem("token");
    request.setRequestHeader("Authorization", `Bearer ${token}`); 

    request.send(formData);

    request.onload = function() {
        if(request.status >= 200 && request.status < 300) {
getposts();

        } else {
            console.log(request.status, request.response);
            alert("Error: " + request.status);
        }
    }
}
getposts();




function deletePost(item) {
     let id=item;
    let request = new XMLHttpRequest();
    request.open("DELETE", `https://tarmeezacademy.com/api/v1/posts/${id}`);
    request.responseType = "json";
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
   const token = localStorage.getItem("token");
    request.setRequestHeader("Authorization", `Bearer ${token}`); 

   
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
 const token = localStorage.getItem("token");
    request.setRequestHeader("Authorization", `Bearer ${token}`); 
   
    

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
        'Authorization':token
      },
    });

    const data = await response.json();
    console.log('', data);
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
};


