import React from 'react';
import './App.css';

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const AllIngredients = ({ all_ingredients }) => {
    return (
        <div>
            {all_ingredients.ingredients.map((item) => (
                <h3 className='recipe-text'>
                    {item.amount.us.value} {item.amount.us.unit}
                    {item.amount.us.unit != item.amount.metric.unit && '/' + item.amount.metric.value + ' ' + item.amount.metric.unit}
                    {' ' + item.name}
                </h3>
            ))}
        </div>
    );
}

export default AllIngredients;