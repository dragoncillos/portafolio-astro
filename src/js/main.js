/*
---------------------------------------------------------------------------------
		URL: https://www.dragoncillos.com/
		Author: dragoncillos.com
		v2.1: 27/01/2024
---------------------------------------------------------------------------------
*/

/* Burguer menu */

const navToggle = document.querySelector('.nav__toggle')
const navWrapper = document.querySelector('.nav__wrapper')
const brandH1 = document.querySelector('h1') // h1:portfolio

navToggle.addEventListener('click', function () {
  if (navWrapper.classList.contains('active')) {
    this.setAttribute('aria-expanded', 'false')
    this.setAttribute('aria-label', 'menu')
    navWrapper.classList.remove('active')
  } else {
    navWrapper.classList.add('active')
    this.setAttribute('aria-label', 'close menu')
    this.setAttribute('aria-expanded', 'true')
  }
})

navWrapper.addEventListener('click', function () {
  if (navWrapper.classList.contains('active')) {
    navWrapper.classList.remove('active')
  } else {
    navWrapper.classList.add('active')
  }
})

brandH1.addEventListener('click', function () {
  if (navWrapper.classList.contains('active')) {
    navWrapper.classList.remove('active')
  }
})

/* Active Navbar Link When Scroll */

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')
let firstNavLink = document.querySelector('header nav a')
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute('id')
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove('active')
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active')
      })
    }
  })
  if (window.scrollY === 0) firstNavLink.classList.remove('active')
}

/* Footer */

const year = document.querySelector('.year')
year.textContent = new Date().getFullYear()
