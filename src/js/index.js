'use strict';

// Slider for Img

var simpleSlides = function () {
  var i;
  var slides = document.querySelectorAll('.slides');
  for (i = 0; i < slides.length; i++) {
    slides[i].setAttribute('style', 'display:none');
  }
  count++;
  if (count > slides.length) {
    count = 1;
  }
  slides[count - 1].setAttribute('style', 'display:block');
  setTimeout(simpleSlides, 3600);
};

var count = 0;
simpleSlides();

// Slider vor Points ### Doesn't work!

var simpleSlidesPoints = function () {
  var j;
  var slidesPoints = document.querySelectorAll('.point');
  for (j = 0; j < slidesPoints.length; j++) {
    //slidesPoints[j].setAttribute('style', 'background-color:red');
    //slidesPoints[j].classList.contains('.pointInActive');
    slidesPoints[j].classList.add('.pointActive');
  }
  count++;
  if (count > slidesPoints.length) {
    count = 1;
  }

  //slidesPoints[count - 1].setAttribute('style', 'background-color:red');
  //slidesPoints[count - 0].setAttribute('style', 'background-color:blue');
  //slidesPoints[count - -1].setAttribute('style', 'background-color:white');
  slidesPoints[count - 1].classList.add('.pointInActive');
  slidesPoints[count - 1].classList.remove('.pointActive');
  setTimeout(simpleSlidesPoints, 3600);
};

var count = 0;
simpleSlidesPoints();

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
