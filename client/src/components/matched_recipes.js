import React from 'react'

const MatchedRecipes = ({ matched_recipes }) => {
    return (
        <div>
            <center><h1>Recipes Found</h1></center>
            {matched_recipes.map((recipe) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{recipe.title}</h5>
                        <img src={recipe.image} alt=""></img>
                        <h6 class="card-subtitle mb-2 text-muted">{recipe.title}</h6>
                        {recipe.missedIngredients.map((missed) => (
                            <div>{missed.name}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
};

export default MatchedRecipes