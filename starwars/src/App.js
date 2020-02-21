import React, { useState } from 'react';
import './App.css';
import CharData from "./components/CharData";
import CharCard from "./components/CharCard";


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [char,setChar] = useState([])

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharData data={setChar} />
      <div className="card-style">
        {char.map((item, index) => {
          return <CharCard
            key={index}
            CharacterName={item.name}
            CharacterHeight={item.height}
            CharacterEyeColor={item.eye_color}
            CharacterGender={item.gender}
          />
        })}</div>
      
    </div>
  );
}

export default App;
