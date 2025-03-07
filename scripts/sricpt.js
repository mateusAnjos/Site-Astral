
//Acordion Logic
// document.querySelectorAll('.accordion-button').forEach(button =>{
//     button.addEventListener('click', ()=>{
//         const accordionContent = button.parentElement.nextElementSibling

//         button.classList.toggle('accordion-button-active')

//         if (button.classList.contains('accordion-button-active')){
//             accordionContent.style.maxHeight =accordionContent.scrollHeight+'px'
//         }else{
//             accordionContent.style.maxHeight =0
//         }
//     })
// })

document.querySelectorAll('#collapseUL li').forEach(item => {
  item.addEventListener('click', (event) => {
      // Verifica se o clique foi na área de conteúdo do acordeão, não dentro dele
      if (!event.target.closest('.collaspeContent')) {
          const button = item.querySelector('.accordion-button');
          const accordionContent = item.querySelector('.collaspeContent');

          // Alterna a classe do botão
          button.classList.toggle('accordion-button-active');

          // Abre ou fecha o conteúdo
          if (button.classList.contains('accordion-button-active')) {
              accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
          } else {
              accordionContent.style.maxHeight = 0;
          }
      }
  });
});



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
    event.preventDefault();

    // Rola suavemente até a seção correspondente
    var section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });

    // Remove o hash da URL sem recarregar a página
    history.replaceState(null, null, ' ');
  }

  // Detecta o hash ao carregar a página e rola até a seção correta
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