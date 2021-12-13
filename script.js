let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menuBar = document.querySelector('#menu-bar');
let sideNav = document.querySelector('.android');
let closeBtn = document.querySelector('.fa-times');
let searchIcon = document.querySelector('.search-icon');
let searchCont = document.querySelector('.search');
let clearSearch = document.querySelector('.close')



window.onscroll = ()=>{
  sideNav.classList.remove('active-nav');

}

menuBar.addEventListener('click', ()=>{
  sideNav.classList.toggle('active-nav')
  loginForm.classList.remove('active');
  searchCont.classList.remove('search-active');
  
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
