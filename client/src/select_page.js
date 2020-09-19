import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import TitleFrame from './images/frame.png';
import Category from './components/category';
import { Array } from './components/array';
import Header from './images/ingredients-header.png';

class Select extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      ingredients: Array,
      checkedItems: new Map(),
      selected: []
    }
  }

  componentDidMount() {
    localStorage.clear();
  }

  handleChange(event) {
    var isChecked = event.target.checked;
    var item = event.target.value;

    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));

    if (isChecked) {
      this.setState({
        selected: this.state.selected.concat(item),
      });
    } else {
      if (this.state.selected.includes(item)) {
        const newList = this.state.selected.filter(select => select !== item);
        this.setState({
          selected: newList,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <div className='header' style={{ height: 250 }}>
          <h1 className='page-title'>Ingredients</h1>
          <img className='header-img-1' src={Header}></img>
        </div>

        <div className='ingre-checkbox'>
          <h2 className='category'>Sugars & Sweenteners</h2>
          <Category items={this.state.ingredients.sugars} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Salts</h2>
          <Category items={this.state.ingredients.salts} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Spices</h2>
          <Category items={this.state.ingredients.spices} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Leaveners</h2>
          <Category items={this.state.ingredients.leaveners} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Extracts & Flavourings</h2>
          <Category items={this.state.ingredients.extracts} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Fats</h2>
          <Category items={this.state.ingredients.fats} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Flours</h2>
          <Category items={this.state.ingredients.flours} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Add-Ins</h2>
          <Category items={this.state.ingredients.adds} handleChange={this.handleChange} />
          <div style={{ height: 15 }}></div>

          <h2 className='category'>Fruits</h2>
          <Category items={this.state.ingredients.fruits} handleChange={this.handleChange} />

          <h2 className='category'>Vegetables</h2>
          <Category items={this.state.ingredients.vegetables} handleChange={this.handleChange} />

          <div style={{ height: 50 }}></div>

          <center>
            {this.state.selected.length == 0 ?
              <div>
                <button className='find-recipe' onClick={() => window.alert('Please select your ingredients')}>
                  Find Recipes
                </button>
              </div> :
              <Link to={{ pathname: "/matches", state: { selected: this.state.selected }, count: this.state.selected.length }}
                style={{ textDecoration: 'none' }}>
                <button className='find-recipe'>
                  Find Recipes
              </button>
              </Link>
            }
          </center>
        </div>
      </div>
    );
  }
}

export default Select;