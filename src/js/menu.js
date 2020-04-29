'use strict';

const btnOpenMenu = document.querySelector('.menuIconBtn');
const btnCloseMenu = document.querySelector('.closeIconBtn');

btnOpenMenu.addEventListener('click', openMenu);

function openMenu(event) {
  var divMenu = document.querySelector('.menu');
  divMenu.classList.contains('inactive');
  divMenu.classList.remove('inactive');
  divMenu.classList.add('menuActive');
}

btnCloseMenu.addEventListener('click', closeMenu);

function closeMenu(event) {
  var divMenu = document.querySelector('.menu');
  divMenu.classList.contains('menuActive');
  divMenu.classList.remove('menuActive');
  divMenu.classList.add('inactive');
}

// ######## svg Heart onclick change svg to filled heart ##########
