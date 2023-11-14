import recipedata from "./recipe.json";

function IngredientList() {
  let ingredientsArr = recipedata[0].ingredients;
  const ListOfIngredients = (props) => {
    return props.map((ing) => <li key={props.index}>{ing}</li>);
  };
  return (
    <div>
      <h3>Ingredients</h3>
      <ul>{ListOfIngredients(ingredientsArr)}</ul>
    </div>
  )
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 