import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import usePokemon from './hook/use-pokemon';
import PokemonCard from './components/PokemonCard';

const App = () => {
  const { pokemon, loading, fetchMore } = usePokemon();

  if (loading && pokemon.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderPokemonCard = ({ item }) => (
    <PokemonCard pokemon={item} />
  );

  return (
    <FlatList
      data={pokemon}
      renderItem={renderPokemonCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <Text>Loading more...</Text>}
      initialNumToRender={10}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;