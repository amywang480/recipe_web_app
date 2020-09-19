import React from 'react';
import './App.css';

const FullRecipe = ({ full_recipe }) => {
    let count = 1;
    return (
        <div>
            {full_recipe.length > 0 && full_recipe.map((item) => (
                item.steps.map((step) => (
                    <h3 className='recipe-text'>{count++}) {step.step}</h3>
                ))
            ))}
        </div>
    );
}

export default FullRecipe;