import React from 'react';
import './App.css';

const FullRecipe = ({full_recipe}) => {
    return (
        <div>
            {full_recipe.length > 0 && full_recipe.map((item) => (
                item.steps.map((step) =>(
                    <h3>{step.step}</h3>
                ))
            ))}
        </div>
    );
}

export default FullRecipe;