import React from "react";
import Recipe from "./Recipe";
import '../styles/RecipeStyles.css'


const RecipeContainer = () => {
    const Recipes = require('../recipes/Recipes.json');


    return (
        <div className="RecipesParentContainer">
            {Recipes.recipes.map(recipe => 
                <Recipe recipe={recipe} />    
            )}
        </div>  
    )
}


export default RecipeContainer

