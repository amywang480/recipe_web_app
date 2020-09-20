import React from 'react';
import './App.css';

function getValue(value) {
    if (Number.isInteger(value)) {
        return value;
    } else {
        return value.toFixed(2);
    }
}

const AllIngredients = ({ all_ingredients }) => {
    let value = 0;
    return (
        <div>
            {all_ingredients.ingredients.map((item) => (
                <h3 className='recipe-text'>
                    {getValue(item.amount.us.value)} {item.amount.us.unit}
                    {item.amount.us.unit != item.amount.metric.unit && '/' + getValue(item.amount.us.value) + ' ' + item.amount.metric.unit}
                    {' ' + item.name}
                </h3>
            ))}
        </div>
    );
}

export default AllIngredients;