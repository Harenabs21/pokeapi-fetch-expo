import { ThemeProvider } from './providers';
import PokemonList from './components/PokemonList';
import React from 'react';

const App = () => {
  
  return (
  <ThemeProvider>
    <PokemonList/>
  </ThemeProvider>
  );
};

export default App;