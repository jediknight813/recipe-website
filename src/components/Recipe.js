import React from "react";
import '../styles/RecipeStyles.css'


const Recipe = ( {recipe} ) => {
    //console.log(recipe)


    return (
        <div className=" flex gap-2 tb:flex-col tb:w-[48%] cursor-pointer shadow-lg pb-4">
            <img className=" w-[140px] h-[140px] tb:w-full tb:h-full" alt={recipe.name} src={recipe.image}/>
            <div className=" flex flex-col gap-2">
                <h1 className=" font-extrabold">{recipe.recipe_name}</h1>
                <h2 className=" font-extralight max-h-[50px] truncate whitespace-normal">{recipe.description}</h2>
                <div className=" flex gap-1 font-extralight items-center text-[12px]">by <h2 className=" font-extrabold text-[12px] underline underline-offset-2 decoration-orange-500"> {recipe.creator}</h2></div>
            </div>
        </div>
    )
}


export default Recipe

