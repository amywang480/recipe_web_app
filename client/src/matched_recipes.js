import React from 'react';
import { Link } from "react-router-dom";
import './App.css';

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const MatchedRecipes = ({ matched_recipes }) => {
    return (
        <div className='matches'>
            {matched_recipes.map((recipe) => (
                <Link to={{ pathname: "/recipe", state: { id: recipe.id }, name: recipe.title }} style={{ textDecoration: 'none' }}>
                    <div className="recipe-card">
                        <div className="recipe-card-body">
                            <div className='image-overlay'>
                                <center>
                                    <img className='recipe-img' src={recipe.image} alt=""></img>
                                    <div className="overlay">
                                        <div className="overlay-text">{recipe.title}</div>
                                    </div>
                                </center>
                            </div>
                            <h2 className="recipe-text">{recipe.title}</h2>
                            <h4 className='recipe-text'>Missing Ingredients:</h4>
                            <div className='missing'>
                                {recipe.missedIngredients.map((missed) => (
                                    <h6 className='recipe-text'>{capitalize(missed.name)}<br /></h6>
                                ))}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
};

export default MatchedRecipes;