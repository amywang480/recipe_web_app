import React, { Component } from 'react';
import './App.scss';
import MatchedRecipes from './components/matched_recipes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { matched_recipes: [] };
  }

  componentDidMount() {
    fetch('http://localhost:9000/getRecipesAPI')
      .then(res => res.json())
      .then((data) => {
        this.setState({ matched_recipes: data })
      })
      .catch(console.log)
  }

  render() {
    return (
      <MatchedRecipes matched_recipes={this.state.matched_recipes} />
    );
  }
}

export default App;