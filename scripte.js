

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

let page = 1;
let isLoading = false;
let lastPage = false;

function getposts() {
    if (isLoading || lastPage) return;
  isLoading = true;


  const loader = document.getElementById('loader-wrapper');

  if (loader) loader.style.display = "flex";

  let request = new XMLHttpRequest();
  request.open("GET", `https://tarmeezacademy.com/api/v1/posts?page=${page}`);

  request.responseType = "json";
  request.send();

  request.onload = function () {
      isLoading = false; 

    if (loader) loader.style.display = "none";

    if (request.status >= 200 && request.status < 300) {
      let postsr = request.response;
      let postarray = postsr.data;
 
       if (postarray.length === 0) {
        lastPage = true;
        return;
      }
      

      for (let poste of postarray) {
        let imgprofile = (poste.author.profile_image && Object.keys(poste.author.profile_image).length !== 0) 
                         ? poste.author.profile_image 
                         : 'imgs/unknown.jpg';
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
                  <p class="username">@${poste.author.username}</p>
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
            page++; 

    } else {
      alert("Error loading posts");
    }
  };

  request.onerror = function () {
      isLoading = false; 

    if (loader) loader.style.display = "none";
    alert("Network Error");
  };
}
post.innerHTML = "";

getposts();

window.addEventListener("scroll", function () {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 150
  ) {
    getposts();
  }
});


/*******************************/

// function stories() {
    

//   let request = new XMLHttpRequest();
//   request.open("GET", `https://tarmeezacademy.com/api/v1/posts?page=${page}`);

//   request.responseType = "json";
//   request.send();

//   request.onload = function () {


//     if (request.status >= 200 && request.status < 300) {
//       let postsr = request.response;
//       let postarray = postsr.data;
 
//      let stories=document.querySelector('.stories')
// for (let poste of postarray) {
//     let imgpost = "";
//     if (poste.image && typeof poste.image === 'object') {
//         imgpost = poste.image.url || poste.image.path;
//     } else {
//         imgpost = poste.image;
//     }

//     if (imgpost && imgpost !== "undefined" && imgpost !== "") {
//         stories.innerHTML += 
//             `<img class="story_img" src="${imgpost}" alt="story">
//         `
//     }
// }
//             page++; 

//     }else {
//       alert("Error loading posts");
//     }
//   };

//   request.onerror = function () {

//     alert("Network Error");
//   };
// }

// stories();



function stories() {

  let request = new XMLHttpRequest();
  request.open("GET", `https://tarmeezacademy.com/api/v1/posts?limit=100`);
  request.responseType = "json";
  request.send();

  request.onload = function () {

    if (request.status >= 200 && request.status < 300) {
      let postsr = request.response;
      let postarray = postsr.data;

      let stories = document.querySelector('.stories');
      let imageFingerprints = new Set(); // بصمات الصور

      function getImageFingerprint(url) {
        return new Promise((resolve, reject) => {
          let img = new Image();
          img.crossOrigin = "anonymous";
          img.src = url;

          img.onload = function () {
            let canvas = document.createElement("canvas");
            let ctx = canvas.getContext("2d");
            canvas.width = 20;
            canvas.height = 20;

            ctx.drawImage(img, 0, 0, 20, 20);
            let data = ctx.getImageData(0, 0, 20, 20).data;

            
            let fingerprint = "";
            for (let i = 0; i < data.length; i += 10) {
              fingerprint += data[i];
            }

            resolve(fingerprint);
          };

          img.onerror = () => reject("image load error");
        });
      }

      (async function () {
        for (let poste of postarray) {
          let imgpost = poste.image?.url || poste.image?.path || poste.image;
          if (!imgpost) continue;

          try {
            let fp = await getImageFingerprint(imgpost);

            if (!imageFingerprints.has(fp)) {
              stories.innerHTML += `<img class="story_img" src="${imgpost}" alt="story">`;
              imageFingerprints.add(fp);
            }

          } catch (e) {
            console.log("skip image", imgpost);
          }
        }
      })();

    } else {
      alert("Error loading posts");
    }
  };

  request.onerror = function () {
    alert("Network Error");
  };
}

stories();
