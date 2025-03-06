import PokemonList from './components/pokemon-list/PokemonList';
import React from 'react';
import { useThemeListener } from './hook/use-theme-listener';

const App = () => {
  useThemeListener();

  return <PokemonList />;
};

export default App;
