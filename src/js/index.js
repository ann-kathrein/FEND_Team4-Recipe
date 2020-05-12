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

/*var points = function () {
  var j;
  var slidePoints = document.querySelectorAll('.point');
  var img = document.querySelectorAll('.dailyRecipesImg');
  for (j = 0; j < slidePoints.length; j++) {
    if (img.classList.contains('display')) {
      slidePoints.classList.add('pointActive');
    } else {
      slidePoints.classList.remove('pointActive');
    }
    countPoints++;
    if (countPoints > slidePoints.length) {
      countPoints = 1;
    }
  }
  slidePoints[count - 1].classList.add('pointInActive');
  slidePoints[count - 1].classList.remove('pointInActive');
  setTimeout(simpleSlides, 3600);
};

var countPoints = 0;
points();*/

// Categorys

var recipes = document.querySelectorAll('.containerRecipe');
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
  addEventListener('click', checkClass)
);
