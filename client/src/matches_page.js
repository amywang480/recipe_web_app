import React, { Component } from 'react';
import './App.css';
import MatchedRecipes from './matched_recipes';
import TitleFrame from './images/frame.png';

class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matched_recipes: [{"id":618390,"title":"Quick Apple Pies long title test","image":"https://spoonacular.com/recipeImages/618390-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":1123,"amount":1.0,"unit":"","unitLong":"","unitShort":"","aisle":"Milk, Eggs, Other Dairy","name":"egg","original":"1 Egg","originalString":"1 Egg","originalName":"Egg","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/egg.png"},{"id":10018338,"amount":1.0,"unit":"sheet","unitLong":"sheet","unitShort":"sheet","aisle":"Refrigerated;Frozen","name":"pastry dough","original":"1 sheet Pastry Dough","originalString":"1 sheet Pastry Dough","originalName":"Pastry Dough","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/dough.jpg"}],"usedIngredients":[{"id":9003,"amount":5.0,"unit":"medium","unitLong":"mediums","unitShort":"medium","aisle":"Produce","name":"apples","original":"5 medium Apples","originalString":"5 medium Apples","originalName":"Apples","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":1005},{"id":615374,"title":"Mom's Apple Pie","image":"https://spoonacular.com/recipeImages/615374-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":2010,"amount":1.0,"unit":"tsp","unitLong":"teaspoon","unitShort":"tsp","aisle":"Spices and Seasonings","name":"cinnamon","original":"1 to 1 ½ tsp. cinnamon","originalString":"1 to 1 ½ tsp. cinnamon","originalName":"cinnamon","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"},{"id":1145,"amount":3.0,"unit":"tbsp","unitLong":"tablespoons","unitShort":"Tbsp","aisle":"Milk, Eggs, Other Dairy","name":"unsalted butter","original":"3 tbsp. unsalted butter","originalString":"3 tbsp. unsalted butter","originalName":"unsalted butter","metaInformation":["unsalted"],"meta":["unsalted"],"image":"https://spoonacular.com/cdn/ingredients_100x100/butter-sliced.jpg"}],"usedIngredients":[{"id":9003,"amount":8.0,"unit":"large","unitLong":"larges","unitShort":"large","aisle":"Produce","name":"apples","original":"8 large apples, peeled, cored and sliced","originalString":"8 large apples, peeled, cored and sliced","originalName":"apples, peeled, cored and sliced","metaInformation":["cored","peeled","sliced"],"meta":["cored","peeled","sliced"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":434},{"id":611026,"title":"Apple Crisp III","image":"https://spoonacular.com/recipeImages/611026-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":1077,"amount":0.75,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Milk, Eggs, Other Dairy","name":"milk","original":"3/4 cup milk","originalString":"3/4 cup milk","originalName":"milk","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/milk.png"},{"id":8120,"amount":2.0,"unit":"cups","unitLong":"cups","unitShort":"cup","aisle":"Cereal","name":"rolled oats","original":"2 cups rolled oats","originalString":"2 cups rolled oats","originalName":"rolled oats","metaInformation":[],"meta":[],"image":"https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"}],"usedIngredients":[{"id":9003,"amount":2.5,"unit":"cups","unitLong":"cups","unitShort":"cup","aisle":"Produce","name":"apples","original":"2 1/2 cups Macintosh apples - peeled, cored and quartered","originalString":"2 1/2 cups Macintosh apples - peeled, cored and quartered","originalName":"Macintosh apples - peeled, cored and quartered","metaInformation":["cored","peeled","quartered"],"meta":["cored","peeled","quartered"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":138},{"id":47950,"title":"Cinnamon Apple Crisp","image":"https://spoonacular.com/recipeImages/47950-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":93674,"amount":0.5,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Milk, Eggs, Other Dairy","name":"cinnamon sugar butter","original":"1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread","originalString":"1/2 cup Land O Lakes® Cinnamon Sugar Butter Spread","originalName":"Land O Lakes® Cinnamon Sugar Butter Spread","metaInformation":["lakes®"],"meta":["lakes®"],"image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon-sugar-butter.png"},{"id":8120,"amount":0.75,"unit":"cup","unitLong":"cups","unitShort":"cup","aisle":"Cereal","name":"old-fashioned oats","original":"3/4 cup uncooked old-fashioned oats","originalString":"3/4 cup uncooked old-fashioned oats","originalName":"uncooked old-fashioned oats","metaInformation":["uncooked"],"meta":["uncooked"],"image":"https://spoonacular.com/cdn/ingredients_100x100/rolled-oats.jpg"}],"usedIngredients":[{"id":9003,"amount":6.0,"unit":"cups","unitLong":"cups","unitShort":"cup","aisle":"Produce","name":"apples","original":"6 medium (6 cups) apples, peeled, cored, sliced","originalString":"6 medium (6 cups) apples, peeled, cored, sliced","originalName":"medium apples, peeled, cored, sliced","metaInformation":["cored","peeled","sliced"],"meta":["cored","peeled","sliced"],"image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":35},{"id":70306,"title":"Easy Cinnamon Apple Pie","image":"https://spoonacular.com/recipeImages/70306-312x231.jpg","imageType":"jpg","usedIngredientCount":1,"missedIngredientCount":2,"missedIngredients":[{"id":2010,"amount":1.0,"unit":"cups","unitLong":"cup","unitShort":"cup","aisle":"Spices and Seasonings","name":"cinnamon","original":"1-2/3 cups (10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided","originalString":"1-2/3 cups (10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided","originalName":"(10-oz. pkg.) HERSHEY'S Cinnamon Chips, divided","metaInformation":["divided","(10-oz. pkg.)"],"meta":["divided","(10-oz. pkg.)"],"image":"https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"},{"id":18334,"amount":15.0,"unit":"oz","unitLong":"ounces","unitShort":"oz","aisle":"Refrigerated;Frozen","name":"refrigerated pie crusts","original":"1 package (15 oz.) refrigerated pie crusts, or pastry for double-crust 9-inch pie","originalString":"1 package (15 oz.) refrigerated pie crusts, or pastry for double-crust 9-inch pie","originalName":"package refrigerated pie crusts, or pastry for double-crust 9-inch pie","metaInformation":["refrigerated","for double-crust pie"],"meta":["refrigerated","for double-crust pie"],"image":"https://spoonacular.com/cdn/ingredients_100x100/pie-crust.jpg"}],"usedIngredients":[{"id":9003,"amount":40.0,"unit":"oz","unitLong":"ounces","unitShort":"oz","aisle":"Produce","name":"apples","original":"2 cans (20-oz. each) sliced apples (not pie filling), drained *","originalString":"2 cans (20-oz. each) sliced apples (not pie filling), drained *","originalName":"cans each) sliced apples (not pie filling), drained","metaInformation":["drained","sliced","canned","(not pie filling)"],"meta":["drained","sliced","canned","(not pie filling)"],"extendedName":"canned apples","image":"https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"}],"unusedIngredients":[],"likes":5}]
        };
    }

    /*componentDidMount() {
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
    }*/

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