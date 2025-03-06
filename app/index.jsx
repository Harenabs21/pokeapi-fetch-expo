import { useThemeListener } from '../hook/use-theme-listener';
import PokemonList from '../components/pokemon-list/PokemonList';
import React from 'react';

const PrincipalPage = () => {
  useThemeListener();

  return (
    <PokemonList /> // Aquí se renderiza la lista de Pokémones
  );
};

export default PrincipalPage;
