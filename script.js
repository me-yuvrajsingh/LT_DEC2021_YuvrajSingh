let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let sideNav = document.querySelector('.android');
let closeBtn = document.querySelector('.fa-times');
let searchIcon = document.querySelector('.search-icon');
let searchCont = document.querySelector('.search');
let clearSearch = document.querySelector('.close');

var prevScrollpos = window.pageYOffset;




window.onscroll = ()=>{
  sideNav.classList.remove('active-nav');
  loginForm.classList.remove('active');
  searchCont.classList.remove('search-active');

    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.querySelector("#main-header").style.top = "0";
      } else {
        document.querySelector("#main-header").style.top = "-75px";
      }
      prevScrollpos = currentScrollPos;
    
}

menuBar.addEventListener('click', ()=>{
  sideNav.classList.toggle('active-nav')


})


formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
  loginForm.classList.remove('active');
});

searchIcon.addEventListener('click',()=>{
  // searchCont.style.top = "75px";
  searchCont.classList.toggle('search-active')
})

clearSearch.addEventListener('click', ()=>{
  searchCont.classList.toggle('search-active')
})


//if navbar sliding will not work properly then uncomment the below code: 

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.querySelector("#main-header").style.top = "0";
//   } else {
//     document.querySelector("#main-header").style.top = "-75px";
//   }
//   prevScrollpos = currentScrollPos;
// }
