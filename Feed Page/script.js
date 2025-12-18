

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
    
//  if (e.target.closest('.Edit')) {
//      let postdiv=e.target.closest('.post');
//  console.log(postDiv);
//         let lovecount = postDiv.querySelector('.lovecount');
//         let id=lovecount.innerHTML;
//         console.log(id);
//         updatePost(id);
//         postDiv.querySelector('.list').style.display="none";
//             postDiv.querySelector('.post_img').style.marginTop = "0px";  
//             if(postDiv){
//  let post_describe = postDiv.querySelector('.post_describe');
//     let textarea = document.querySelector('.text'); 
// if(post_describe && textarea){
//      textarea.value=post_describe.innerText.trim();

// }
//             }
         

if (e.target.closest('.Edit')) {
    let postDiv = e.target.closest('.post');
    let lovecount = postDiv.querySelector('.lovecount');
    let id = lovecount.innerHTML;
    console.log(id);

    let post_describe = postDiv.querySelector('.post_descripe'); 
    let textarea = document.querySelector('.text'); 
    
        textarea.value = post_describe.innerText.trim(); 
    
    let postImg = postDiv.querySelector('.post_img');
        let currentImageUrl = postImg.src; 
        console.log("رابط الصورة الحالية للتعديل: ", currentImageUrl);
        
    deletePost(id);
    

    updatePost(id);
    postDiv.querySelector('.list').style.display = "none";
    postDiv.querySelector('.post_img').style.marginTop = "0px";

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
        <button class="Edit" href=""><img src="imgs/etdi.png" alt="">Edit Post</button><br><br>
        <button class="Delete" href=""><img src="imgs/delete.png" alt="">Delete Post</button><br><br>
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
    request.setRequestHeader("Authorization", "Bearer 81876|UFXnLRIhu16UB11mUryC6jMDuUvzje6oRuIEi3h5d58bb65c"); 

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
    request.setRequestHeader("Authorization", "Bearer 81876|UFXnLRIhu16UB11mUryC6jMDuUvzje6oRuIEi3h5d58bb65c"); 

   
    request.send();

    request.onload = function() {
        if(request.status >= 200 && request.status < 300) {
            getposts();
        } else {
            // console.log(request.status, request.response);
            // alert("You doesn't own this post ");
        }
    }
}


function updatePost(id) {
    let request = new XMLHttpRequest();
    request.open("POST", `https://tarmeezacademy.com/api/v1/posts/${id}`);
    request.responseType = "json";
    
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Authorization", "Bearer 81876|UFXnLRIhu16UB11mUryC6jMDuUvzje6oRuIEi3h5d58bb65c");

    let fileInput = document.querySelector(".img_of_new_post");
    let formData = new FormData();
    

    formData.append("_method", "put");

    if (fileInput.files.length > 0) {
        formData.append("image", fileInput.files[0]);
    }

    request.onload = function() {
        if (request.status >= 200 && request.status < 300) {
            alert("The post is updated successfully");
            getposts();
        } else {
            console.error(request.response);
        }
    };

    request.send(formData);
}