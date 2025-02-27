import { FlatList, View, Text } from 'react-native';
import usePokemon from '../../hook/use-pokemon';
import PokemonCard from './PokemonCard';
import React, { useCallback, useContext } from 'react';
import { ThemeContext } from '../../context/theme/ThemeContext';
import tw from 'twrnc'

const PokemonList = () => {
  const { pokemon, loading, fetchMore } = usePokemon();
  const theme = useContext(ThemeContext)


  const renderPokemonCard = useCallback(
    ({ item }) => <PokemonCard pokemon={item} />,
    []
  );

  const ListFooterComponent = useCallback(() => {
    return loading ? <Text style={[tw`text-center my-3`, { color: theme.text }]}>Loading more...</Text> : null;
  }, [loading]);

  if (loading && pokemon.length === 0) {
    return (
      <View style={[tw`flex flex-1 items-center justify-center`, { backgroundColor: theme.background }]}>
        <Text style={{color: theme.text}}>Loading...</Text>
      </View>
    );
  }

  

  return (
    <FlatList
      data={pokemon}
      renderItem={renderPokemonCard}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={[tw`p-2`, { backgroundColor: theme.background }]}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={ListFooterComponent}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={5}
    />
  );
};


export default PokemonList;