import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { IconName } from "react-icons/io";

function Landing() {


  const [recipe, setRecipe] = useState('');
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    navigate('/recipe/' + recipe);
  }

  return (
    /* fun words */
    <div class='landing-body'> 
      <div class='centered'> 
        <h1 class="landing-title">The Cutting Board</h1>
        <form>
          <input class='search-input' type='search' placeholder='Find a Recipe' onChange={(event) => { setRecipe(event.target.value) }}> <ion-icon name="search-outline"> </ion-icon> </input>
          <button class="submit-btn" type='submit' onClick={submitForm}>Search</button>
        </form>
      </div>
    </div>
    
  )
  
}

export default Landing
