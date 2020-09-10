import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

const Category = ({ items, handleChange }) => {
    let newArr = [];

    for (let i = 0; i < items.length; i++) {
        newArr.push(<FormControlLabel
            control={
                <Checkbox
                    value={items[i]}
                    onChange={handleChange}
                    name="checked"
                    color="primary"
                    style={{
                        color: "#70c6a1"
                    }}
                />
            }
            label={capitalize(items[i])}
        />);
    }

    return newArr;
};

export default Category;