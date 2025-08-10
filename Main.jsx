import React from "react"
import IngredientsList from "./components/IngredientsList"
import SmartRecepie from "./components/SmartRecipe"
import {getRecipeFromMistral } from "./ai"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form 
  className="add-ingredient-form" 
  onSubmit={e => {
    e.preventDefault();               // prevent page reload
    addIngredient(new FormData(e.target));  // call your function with form data
    e.target.reset();                 // clear input after submission (optional)
  }}
>
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            
            {ingredients.length > 0 && 
                 <IngredientsList ingredients={ingredients} 
                 getRecipe={getRecipe}
                 />
            }
            
            {recipe && <SmartRecepie recipe={recipe}/>}
        </main>
    

    )
}