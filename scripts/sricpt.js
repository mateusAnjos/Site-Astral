
//Acordion Logic
document.querySelectorAll('.accordion-button').forEach(button =>{
    button.addEventListener('click', ()=>{
        const accordionContent = button.parentElement.nextElementSibling

        button.classList.toggle('accordion-button-active')

        if (button.classList.contains('accordion-button-active')){
            accordionContent.style.maxHeight =accordionContent.scrollHeight+'px'
        }else{
            accordionContent.style.maxHeight =0
        }
    })
})



//Burger Menu Logic

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuItem = document.getElementsByClassName(".nav-item")

hamburger.addEventListener("click", mobileMenu);

for (var i = 0; i < menuItem.length; i++) {
    menuitem[i].onclick = closeMenu();
  }

function mobileMenu() {
    hamburger.classList.toggle("active");
    console.log("burger ativado");
    navMenu.classList.toggle("active");
    console.log("navmenu ativado")
}



function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

