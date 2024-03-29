import React from 'react'
import axios from 'axios';
import '../App.css';
import { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';


function Searched() {

  const [searchedRecipe, setSearchedRecipe] = useState([]);

  /* Get the different elements from the url 
  Note: in App.js we defined:
  path='/recipe/:term'

  prams.term gets the current term in the url
  */
  let params = useParams();
  const navigate = useNavigate();

  // when ever the screen is rendered, run getSearch
  // and also when ever the term in the url is changed, run getSearched

  //Get data from api after page is run
  useEffect(() => {

    /**
     * Access axios food api to get info on the ingredient(term) we are looking for
     * 
     * @param {*} e 
     */
    const getSearch = (e) => {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + params.term)
        .then(function (response) {
          console.log(response.data.meals)
          setSearchedRecipe(response.data.meals) // how do we know we want data.meals? ready api docs?

          /* 
          All Searched html is defaulted to hidden
          "Show" either no recipe found or all the info by:
          removing the "hidden" class from respective div to show appropriate html
          */
          if (response.data.meals == null) {
            setSearchedRecipe([]);
            
            
            //Show "No recipe found" by removing 'hidden' from div with id 'request-null'
            const nullDisplay = document.getElementById('request-null');
            nullDisplay.classList.remove('hidden');
          }
          else {
            //Show api response info by removing 'hidden' from div with id 'request-exists'
            const showDisplay = document.getElementById('request-exists');
            showDisplay.classList.remove('hidden');
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    };

    getSearch(params.term);

  }, [params.term])


  return (

    <div class=''>

      <div id='request-null' class='hidden centered' >
         <h1 class='landing-title'>No Recipe Found </h1>
         <p1 class='not-found'>Try searching chicken, beef, apple, or some other ingredient</p1>
          </div>

      <div id='request-exists' class='hidden'>

        <header class="search-header">{params.term}
          <button onClick={() => navigate(-1)} className='return-button'>Back </button>
        </header>
        <div class='searched-body'>
          <div class='searched-container'>

            {searchedRecipe.map((item) => {
              return (
                <div class='card' key={item.idMeal}>
                  <div class='card-header'>
                    <img src={item.strMealThumb} alt=""></img>
                  </div>

                  <div class='card-body'>
                    <h1>{item.strMeal}</h1>
                    <p> Meal Category: {item.strCategory} </p>
                    <p>Meal Area: {item.strArea}</p>
                    <p>Meal Tags: {item.strTags}</p>
                    <div class='tag-container'>
                      <a class='tag' target="_blank" rel="noreferrer" href={item.strSource}>Recipe</a>
                      <a class='tag' target="_blank" rel="noreferrer" href={item.strYoutube}>Video</a>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

    </div>

  )
}

export default Searched