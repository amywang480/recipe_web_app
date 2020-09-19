import React from 'react';
import './App.css';
import Header from './images/steps-header.png';
import FullRecipe from './full_recipe';
import AllIngredients from './all_ingredients';

class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            full_recipe: [],
            all_ingredients: { ingredients: [] }
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        var id = this.props.location.state.id;



        /*fetch('http://localhost:9000/getIngredients?id=' + id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ all_ingredients: data })
            })
            .catch(console.log)

        fetch('http://localhost:9000/getRecipe?id=' + id)
            .then(res => res.json())
            .then((data) => {
                this.setState({ full_recipe: data })
            })
            .catch(console.log)*/


        Promise.all([
            fetch('http://localhost:9000/getIngredients?id=' + id),
            fetch('http://localhost:9000/getRecipe?id=' + id)
        ])
            .then(([res1, res2]) => {
                return Promise.all([res1.json(), res2.json()])
            })
            .then(([data1, data2]) => {
                this.setState({
                    all_ingredients: data1,
                    full_recipe: data2
                });
            });
    }

    render() {
        return (
            <div>
                <div className='header' style={{ height: 250 }}>
                    <h1 className='page-title'>Steps</h1>
                    <img className='header-img-3' src={Header}></img>
                </div>

                <div className="recipe-card-full">
                    <div className="recipe-card-body">
                        <div className='image-overlay'>
                            <center className='card-container'>
                                <img className='recipe-img-full' src={this.props.location.img} alt=""></img>
                                <div className="overlay">
                                    <div className="overlay-text">{this.props.location.name}</div>
                                </div>
                            </center>
                        </div>

                        <h1 className="recipe-text-title">{this.props.location.name}</h1>

                        <h2 className='recipe-heading'>Ingredients</h2>
                        <AllIngredients all_ingredients={this.state.all_ingredients} />

                        <h2 className='recipe-heading'>Steps</h2>
                        <FullRecipe full_recipe={this.state.full_recipe} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Recipe;