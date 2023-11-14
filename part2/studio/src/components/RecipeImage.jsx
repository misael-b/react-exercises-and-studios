import recipedata from "./recipe.json";
import "./styling.css";

function RecipeImage() {
  return (
    <div>
      <img alt={recipedata[0].name} src={recipedata[0].recipeImage} className="recipeImage"/>
    </div>
  );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 