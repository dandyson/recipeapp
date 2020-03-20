import React from 'react'; 
import style from './recipe.css';

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className="recipe">
            <div className="recipeImg">
            <img src={image} alt="" class="foodImage" />
            </div>
            <h1>{title}</h1>
            <ul>{ingredients.map(ingredients => (
                <li>{ingredients.text}</li>
            ))}</ul>
            <p>Calories: {Math.round((calories) * 1)}</p>
            
        </div>
    )
}

export default Recipe;