import './App.css';
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";


function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);

  const YOUR_APP_ID= "98ae43c9"
  const YOUR_APP_KEY= "5dadbe216d63560310fe00f37bd98dec"
  
  
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;

  const getRecipes = async () => {
   const result = await Axios.get(url);
   setrecipes(result.data.hits);
   console.log(result.data.hits);
 };

const onSubmit = (e) => {
   e.preventDefault();
   getRecipes();
}

  return (
    <div className="App">
      <h1 onClick={getRecipes}>Silly's Recipes 🍔 </h1>
      <form className="search" onSubmit={onSubmit}>
       <input 
        type="text" 
        className="app_input"
        placeholder="Enter Ingredient 🍟" 
        autoComplete="Off"
        value={query} 
        onChange={(e) => setquery(e.target.value)} 
       />
       <input className="app_submit" type="submit" value="Search" />
      </form>
      
      <div className="app_recipes">
         {recipes !== [] &&
         recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
         })}
      </div>
    </div>
  );
}

export default App;
