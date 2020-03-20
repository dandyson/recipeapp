import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';


const App = () => {
  const APP_KEY = 'dd762149496067f6dbf30e1a0f1ea6f7';	
  const APP_ID = 'e160ddd8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken'); 


  const getRecipes = async () => {
    const response = 
    await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <h1>Recipe Search!</h1>
      <h4>Search for any kind of food in the box below to find recipies!</h4>
      <form onSubmit={getSearch} className="search-form">
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      <div className="recipies">
    {recipes.map(recipe => (
      <Recipe 
      key={recipe.recipe.label} 
      title={recipe.recipe.label} 
      calories={recipe.recipe.calories} 
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}  />
    ))}
    </div>
    </div>
  );
};


export default App;
