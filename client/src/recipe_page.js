import React from 'react';
import './App.css';
import TitleFrame from './images/frame.png';
import FullRecipe from './full_recipe';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            full_recipe: [],
        };
    }

    componentDidMount() {
        var id = this.props.location.state.id;

        fetch('http://localhost:9000/getRecipe?id=' + id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ full_recipe: data })
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className='second-container'>
                <center>
                    <div className='wrap-title'>
                        <img src={TitleFrame} alt='frame' className='title-frame'></img>
                        <h2 className='recipe-title'>{this.props.location.name}</h2>
                    </div>
                </center>

                <FullRecipe full_recipe={this.state.full_recipe} />
            </div>
        );
    }
}

export default Recipe;