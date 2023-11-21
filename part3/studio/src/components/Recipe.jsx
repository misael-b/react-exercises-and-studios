import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://natashaskitchen.com/about/";
   let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png";
   let authorName = "Natasha Kravchuk";

   return (
      <div>
         <img src={authorPhoto} alt= "Natasha Kravchuk" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}> Website</a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Granny Smith Apple", "Cinnamon", "All-purpose flour", "Unsalted butter", "Eggs", "granulated sugar"];
   return(
      <div>
         <h3>Recipe Ingredients: </h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
            <li>{ingredients[5]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Apple Pie Recipe</h1>
            <p>Classic Apple Pie Recipe with an irresistible homemade apple pie filling. From the best flaky pie crust
               to the generous saucy center, this recipe always gets glowing reviews</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://natashaskitchen.com/wp-content/uploads/2019/10/Apple-Pie-2.jpg" alt="Apple Pie" className="imageUpdates" style={{width:450}}/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
