import React from "react";
function Recipe({recipe}){
    return(
        <div className="recipe">
            <h2>{recipe.name}</h2>
            <p>{recipe.description}</p>
        </div>
    )
}
export default Recipe;