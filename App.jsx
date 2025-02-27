import { ThemeProvider } from './providers';
import PokemonList from './components/pokemon-list/PokemonList';
import React from 'react';

const App = () => {
  
  return (
  <ThemeProvider>
    <PokemonList/>
  </ThemeProvider>
  );
};

export default App;