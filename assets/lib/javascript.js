// $(document).ready(function () {
//     var ctrlVideo = document.getElementById("video");

//     $('button').click(function () {
//         if ($('button').hasClass("active")) {

//             ctrlVideo.play();

//             $('button').html("Pause");
//             $('button').toggleClass("active");
//         } else {

//             ctrlVideo.pause();

//             $('button').html("play");
//             $('button').toggleClass("active");
//         }
//     });

// });

function playVid(e) { 
    const vid = document.getElementById("myVideo"+e);
    const btn = document.getElementById("btns"+e); 
    btn.classList.toggle("activeBtn");

            if (btn.classList.contains("activeBtn")) {
    vid.play(); 

          } else {

              vid.pause();
              }
  } 


// function playVid(){
//     var videos = document.getElementsByClassName('myVideo');
//         var btn = document.getElementsByClassName("btns");


//     // Create a promise to wait all videos to be loaded at the same time.
//     // When all of the videos are ready, call resolve().
//     var promise = new Promise(function(resolve) {
//       var loaded = 0;
    
//       videos.forEach(function(v) {
//         v.addEventListener('loadedmetadata', function() {
//           loaded++;
//             btn.classList
//           if (loaded === videos.length) {
//             resolve();
//           }
//         });
//       });
//     });
    
//     // Play all videos one by one only when all videos are ready to be played.
//     promise.then(function() {
//       videos.forEach(function(v) {
//         v.play();
//       });
//     });
// }


// function playVid() {
//     var vid = document.getElementsByClassName("myVideo");
//     var btn = document.getElementsByClassName("btns");
//     // Declare i and qty for "for" loop

//     var i, qty = vid.length;
//     for (i = 0; i < qty; i++) {
//         btn[i].classList.toggle("active");
//         if (btn[i].classList.contains("active")) {
//             vid[i].play();
//         } else {
//             vid[i].pause();
//         }

//     }
// } 
