import './App.css';
import React, {useState} from 'react'
import RecipeList from './Recipe Components/RecipeList';
import AddRecipeForm from './Recipe Components/AddRecipeForm';

function App() {
  const [recipes, setRecipes] = useState([])

  const addRecipe = (recipe) =>{
    setRecipes([...recipes, recipe])
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <AddRecipeForm addRecipe= {addRecipe}/>
      <RecipeList recipes= {recipes}/>
    </div>
  );
}

export default App;
