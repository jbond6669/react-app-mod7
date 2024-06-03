import React, { createContext, useState } from 'react';

// Create a Context for the characters
export const CharacterContext = createContext();

// Create a Provider component
export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);

  const addCharacter = (character) => {
    setCharacters((prevCharacters) => [...prevCharacters, character]);
  };

  return (
    <CharacterContext.Provider value={{ characters, addCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};
