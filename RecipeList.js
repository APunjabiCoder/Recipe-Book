import React from 'react';
import Recipe from './Recipe';

function RecipeList({recipes}){
    return(
        <div className='recipe-list'>
            {recipes.map((recipe, index)=>(
             <Recipe key={index} recipe={recipe}/>
            ))}
        </div>
    )
}
export default RecipeList;