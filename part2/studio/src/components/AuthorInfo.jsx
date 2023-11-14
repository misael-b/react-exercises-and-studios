import recipedata from "./recipe.json";
import "./styling.css";



function AuthorInfo() {
  let recipeAuthor = <div key={recipedata[0].name}>{recipedata[0].author}</div>
  let recipeAuthorImage = <div key={recipedata[0].name} className="authorImage"><img src={recipedata[0].authorImage} className="authorImage" alt={recipedata[0].name} /></div>
  let recipeWebsite = <div key={recipedata[0].name}><a href={ recipedata[0].website }>Website</a></div>
  return (<div>
    {recipeAuthorImage}
    {recipeAuthor}
    {recipeWebsite}
  </div>)
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 