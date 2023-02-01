
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

hamburger.addEventListener("click", mobileMenu);
// document.body.addEventListener('click', closeMenuAnywhere);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// function closeMenuAnywhere(){
//         hamburger.classList.remove("active");
//         navMenu.classList.remove("active");
//         console.log("fechou")
// } 
