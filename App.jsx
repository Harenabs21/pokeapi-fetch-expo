import { FlatList, StyleSheet, View, Text } from 'react-native';
import usePokemon from './hook/use-pokemon';
import PokemonCard from './components/PokemonCard';
import React, { useCallback } from 'react';

const App = () => {
  const { pokemon, loading, fetchMore } = usePokemon();


  const renderPokemonCard = useCallback(
    ({ item }) => <PokemonCard pokemon={item} />,
    []
  );

  const ListFooterComponent = useCallback(() => {
    return loading ? <Text style={styles.loadingText}>Loading more...</Text> : null;
  }, [loading]);

  if (loading && pokemon.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  

  return (
    <FlatList
      data={pokemon}
      renderItem={renderPokemonCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.container}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={ListFooterComponent}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
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
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default App;