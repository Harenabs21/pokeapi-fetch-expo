import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import usePokemon from './hook/use-pokemon';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const pokemon = usePokemon();

  const renderPokemonCard = ({ item }) => (
    <PokemonCard pokemon={item} />
  );

  return (
    <FlatList
      data={pokemon}
      renderItem={renderPokemonCard}
      keyExtractor={(item) => item.name}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default App;