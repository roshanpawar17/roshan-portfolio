
  
// let hideNav = document.querySelector("#hide-nav")    
// let navigationList = document.querySelector(".navigations > ul")    

// function showNav(){
//     navigationList.style.display = "block"
// }

// function hideNav(){
//     navigationList.style.display = "none"
// }

let form = document.getElementById("my-form")

function submitform(){
    alert("Thanks for Submitting..!")
    form.reset()
}

let mobileNavbarBtn = document.querySelector('.mobile-navbar-btn');
let navigationList = document.querySelector('.navigation-list');
let icon  = document.querySelectorAll('.fa-solid ');

mobileNavbarBtn.addEventListener('click', ()=>{
   navigationList.classList.toggle("active")
   icon.forEach((e)=>{
       e.classList.toggle("btn-show")
       e.classList.toggle("btn-hide")
   })
   
})

