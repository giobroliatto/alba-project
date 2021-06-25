// DOM -> Document Object Model
// tudo que for HTML será transformado em um objeto

/* fechar/abrir o menu ao clicar no X/hamburguer */
const nav = document.querySelector('#header nav')

const toggle = document.querySelectorAll('#header nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') // em nav, em todas as classes presentes, existe alguma que tem 'show'? se sim, remova o 'show' (toggle). se não, adicione o 'show' (toggle)
  }) // adiciona um evento "ouvinte" (nesse caso, ao clicar ('click'), execute uma função)
}

/* fechar o menu ao clicar em algum elemento do menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* habilitar sombra do header ao scrollar a página quando o scroll passar da altura do header */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

/* carrossel/swiper/slider dos services */
/* const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true
}) */

/* carrossel/swiper/slider dos services */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  keyboard: true
  /*   breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  } */
})

/* carrossel/swiper/slider das arts */
/* const swiper2 = new Swiper('.swiper-container2', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination2'
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
}) */

/* scroll reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
#arts header, #arts .arts,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)
