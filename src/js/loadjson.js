'use strict';

import recipes from '../data/recipes.json';
const recipeData = recipes;

const collectionRecipes = document.querySelector('.collectionRecipes');
recipeData.map(function (recipe) {
  const recipeNode = document.createElement('div');
  recipeNode.classList.add(`containerRecipe`);
  recipe.categorys.map(function (category) {
    recipeNode.classList.add(category);
  });
  const recipeLink = document.createElement('a');
  recipeLink.setAttribute('href', `Recipes/index.html?id=${recipe.id}`);
  const recipeImage = document.createElement('img');
  recipeImage.setAttribute('src', recipe.image);
  recipeImage.classList.add('recipe');
  recipeImage.setAttribute('alt', recipe.name);
  recipeLink.appendChild(recipeImage);
  const recipeStyle = document.createElement('div');
  recipeStyle.classList.add('backRecipeName');
  const recipeHeadline = document.createElement('h5');
  recipeHeadline.classList.add('recipeName');
  const recipeText = document.createTextNode(recipe.name);
  const heartBtn = document.createElement('button');
  heartBtn.classList.add('heartBtn-unliked');
  recipeHeadline.appendChild(recipeText);
  recipeStyle.appendChild(recipeHeadline);
  recipeStyle.appendChild(heartBtn);
  recipeNode.appendChild(recipeLink);
  recipeNode.appendChild(recipeStyle);
  collectionRecipes.appendChild(recipeNode);
});
