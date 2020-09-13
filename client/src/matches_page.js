import React, { Component } from 'react';
import './App.css';
import MatchedRecipes from './matched_recipes';
import TitleFrame from './images/frame.png';

class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matched_recipes: []
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
    
        fetch('http://localhost:9000/getRecipesAPI?' + queryStr)
          .then(res => res.json())
          .then((data) => {
            this.setState({ matched_recipes: data })
          })
          .catch(console.log)
    }

    render() {
        return (
            <div className='second-container'>
                <center>
                    <img src={TitleFrame} alt='frame' className='title-frame'></img>
                    <h1 className='page-title'>Recipes</h1>
                </center>

                <div style={{ height: 300 }}></div>

                <div>
                    <MatchedRecipes matched_recipes={this.state.matched_recipes} />
                </div>
            </div>
        );
    }
}

export default Matches;