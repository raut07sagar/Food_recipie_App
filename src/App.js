import React, { useEffect, useState } from "react";
import './App.css';
import Cards from "./Cards";



const App = () => {
  const API_ID = "f22e61df";

  const API_KEY = "adbdab990faa96777e9cd03b2b1781c2	"



  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chicken");

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes()
  }, [query])



  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`)
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  };

  const updateSearch = e => {
    setsearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setquery(search);
    setsearch('')
  }

  return (
    <div className="App">

      <form onClick={getSearch} className="serach_form">
        <input className="search_bar" type="text" value={search} onChange={updateSearch} placeholder="search here" />
        <button className="search_button" type="submit">
          search
        </button>
      </form>

      {recipes.map((val) => {
        return (
          <Cards key={val.recipe.label} title={val.recipe.label}
            image={val.recipe.image}
            calories={val.recipe.calories}
            ingredients={val.recipe.ingredients}
            dietLabels={val.recipe.dietLabels}
            dishType={val.recipe.dishType}
            url={val.recipe.url}
          />
        );
      })};

    </div>


  );
};

export default App;
