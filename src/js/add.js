'use strict';

const btnAddPic = document.querySelector('.uploadPicture');

btnAddPic.addEventListener('onclick', addUrl);

function addUrl() {
  const link = prompt('Please enter an URL', 'https://www.example.comm');
  if (link != null) {
    document.getElementById('link').innerHTML =
      'This image will be added to the Recipe: ' + link;
  }
}
