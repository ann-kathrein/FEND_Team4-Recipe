'use strict';

// Solution from Eric
//1
async function getRecipeData() {
  const response = await fetch(`../data/recipes.json`);
  const data = await response.json();
  return data;
}
async function init() {
  const data = await getRecipeData();
  const recipeData = data.recipes;
  console.log(recipeData);
  console.log('name', recipeData[0].name);
}

init();

//2
import data from '../data/recipes.json';
console.log(data);
const recipeData = data.recipes;
console.log(recipeData);
console.log('name', recipeData[0].name);

/*let recipeData = require('../data/recipes.json');
let recipeCollection = JSON.stringify(recipeData);
console.log(recipeData);

let recipe1 = JSON.parse(recipeCollection);
console.log(recipe1.name);*/

/*
function storeRecipeCollection() {
  event.preventDefault();
  localStorage.setItem('recipeCollection', recipeCollection);
*/
