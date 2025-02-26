import { FlatList, StyleSheet, View, Text } from 'react-native';
import usePokemon from '../hook/use-pokemon';
import PokemonCard from './PokemonCard';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../context/theme/ThemeContext';

const PokemonList = () => {
  const { pokemon, loading, fetchMore } = usePokemon();
  const theme = useContext(ThemeContext)


  const renderPokemonCard = useCallback(
    ({ item }) => <PokemonCard pokemon={item} />,
    []
  );

  const ListFooterComponent = useCallback(() => {
    return loading ? <Text style={[styles.loadingText, { color: theme.text }]}>Loading more...</Text> : null;
  }, [loading]);

  if (loading && pokemon.length === 0) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: theme.background }]}>
        <Text style={{color: theme.text}}>Loading...</Text>
      </View>
    );
  }

  

  return (
    <FlatList
      data={pokemon}
      renderItem={renderPokemonCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[styles.container, { backgroundColor: theme.background }]}
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

export default PokemonList;