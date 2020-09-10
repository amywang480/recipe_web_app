import React from 'react';
import './App.css';

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const MatchedRecipes = ({ matched_recipes }) => {
    return (
        <div className='matches'>
            {matched_recipes.map((recipe) => (
                <div class="recipe-card">
                    <div class="recipe-card-body">
                        <div class='image-overlay'>
                            <center>
                                <img class='recipe-img' src={recipe.image} alt=""></img>
                                <div class="overlay">
                                    <div class="overlay-text">{recipe.title}</div>
                                </div>
                            </center>
                        </div>
                        <div style={{ height: 15 }}></div>
                        <h2 class="recipe-text">{recipe.title}</h2>
                        <br />
                        <h4 className='recipe-text'>Missing Ingredients:</h4>
                        <div style={{ height: 0.3 }}></div>
                        {recipe.missedIngredients.map((missed) => (
                            <h6 class='recipe-text'>{capitalize(missed.name)}<br /></h6>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MatchedRecipes;