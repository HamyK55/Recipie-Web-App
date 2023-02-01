import React, { useState } from 'react';
import '../App.css';
import {useNavigate } from 'react-router-dom';

function Landing() {
  return (
    <div class= 'landing-body'>
      <div class='centered'>


      <h1>The Cutting Board</h1>
      <form>
        <input class='search-input' type='search' placeholder='Find a Recipe'></input>
        <button class='submit-btn' type='submit' >Search</button>


      </form>

      </div>


    </div>
  )
}

export default Landing
