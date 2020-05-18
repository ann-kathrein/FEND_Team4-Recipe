'use strict';

// Slider for Img

var simpleSlides = function () {
  var i;
  var slides = document.querySelectorAll('.slides');
  for (i = 0; i < slides.length; i++) {
    //slides[i].setAttribute('style', 'display:none');
    slides[i].classList.remove('display');
  }
  count++;
  if (count > slides.length) {
    count = 1;
  }
  //slides[count - 1].setAttribute('style', 'display:block');
  slides[count - 1].classList.add('display');
  setTimeout(simpleSlides, 3600);
};

var count = 0;
simpleSlides();

// Slider vor Points ### Doesn't work!
var points = document.querySelectorAll('.point');
function changecolor(points) {
  function filled(points) {
    points.classList.add('pointActive');
  }
  function unfilled(points) {
    points.classList.remove('pointActive');
    points.classList.remove('pointInActive');
  }
  setTimeout(unfilled, 3600, points);
  filled(points);
}

// Categorys

var recipes = document.querySelectorAll('.containerRecipe');
console.log(recipes); // NodeList length:0
function checkClass(event) {
  const currentBtn = event.target;
  const filterCategory = currentBtn.dataset.category;
  [...recipes].forEach((recipe) => {
    if (filterCategory === 'all') {
      recipe.classList.remove('hide');
    } else if (recipe.classList.contains(filterCategory)) {
      recipe.classList.remove('hide');
    } else {
      recipe.classList.add('hide');
    }
  });
}

var categoryBtns = document.querySelectorAll('.category');
[...categoryBtns].forEach((categoryBtn) =>
  categoryBtn.addEventListener('click', checkClass)
);
