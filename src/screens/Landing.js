import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {
  // js code 

  const [recipe, setRecipe] = useState('');
  const navigate = useNavigate();
  
  // function to navigate to page based on what "recipe" was submitted
  const submitForm = (event) => {
    event.preventDefault();
    navigate('/recipe/' + recipe);
  }

  
  
  // All rendered out to screen
  return (
    <div class= 'landing-body'>
      <div class='centered'>

      
      <h1>The Cutting Board</h1>
      <form>
        // onChange will trigger when an event(the info in the form is updated), info will be grabbed from the input form
        <input onChange={(event) => {setRecipe(event.target.value)}} class='search-input' type='search' placeholder='Find a Recipe'></input>
        <button onClick={submitForm} class='submit-btn' type='submit' >Search</button>


      </form>

      </div>


    </div>
  )
}

export default Landing
