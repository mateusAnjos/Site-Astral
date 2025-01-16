
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

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Impede o comportamento padrão de adicionar o hash à URL

    // Rola suavemente até a seção correspondente
    var section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Remove o hash da URL sem recarregar a página
    history.replaceState(null, null, ' '); // Deixa a URL sem o hash
  }

  window.onload = function() {
    var hash = window.location.hash;
    if (hash) {
      var section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Remove o hash da URL após rolar para a seção
        history.replaceState(null, null, ' ');
      }
    }
  };