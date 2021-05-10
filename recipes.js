window.addEventListener('DOMContentLoaded', () => loadRecipes());

const loadRecipes = async () => {
  let uri = 'http://localhost:3000/recipes';
  
  const res = await fetch(uri);
  const recipes = await res.json();
  console.log(recipes);
}