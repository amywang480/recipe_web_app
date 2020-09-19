import React, { Component } from 'react';
import './App.css';
import MatchedRecipes from './matched_recipes';
import Header from './images/recipe-header.png';

class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matched_recipes: localStorage.getItem('matched') ? JSON.parse(localStorage.getItem('matched')) : []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        var selected = this.props.location.state.selected;
        var count = this.props.location.count;
        var queryStr = "";

        for (var i = 0; i < count; i++) {
            queryStr += "&" + i + "=" + selected[i];
        }

        queryStr = queryStr.substring(1);

        if (this.state.matched_recipes.length == 0) {
            fetch('http://localhost:9000/getRecipesAPI?' + queryStr)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        matched_recipes: data
                    });
                    localStorage.setItem('matched', JSON.stringify(data));
                })
                .catch(console.log)
        }
    }

    render() {
        return (
            <div>
                <div className='header' style={{ height: 250 }}>
                    <h1 className='page-title'>Recipes</h1>
                    <img className='header-img-2' src={Header}></img>
                </div>
                <div>
                    <MatchedRecipes matched_recipes={this.state.matched_recipes} />
                </div>
                <div style={{ height: 50 }}></div>
            </div>
        );
    }
}

export default Matches;