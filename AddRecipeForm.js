import React, {useState} from "react";

function AddRecipeForm({addRecipe}){
    const [name, setName] = useState('');
    const [description, setDescription]= useState('')

    const handleSubmit = (e) =>{
        e.preventDefault()
        addRecipe({name, description})
        setName('')
        setDescription('')
    };
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Recipe Name"/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Recipe Description"/>
             <button type="submit">Add Recipe</button>  
        </form>
    )
}
export default AddRecipeForm
