import { FlatList, View, Text } from 'react-native';
import usePokemon from '../../hook/use-pokemon';
import PokemonCard from './PokemonCard';
import SearchInput from '../input/SearchInput';
import NotFound from '../not-found/NotFound';
import React, { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme/ThemeContext';
import tw from 'twrnc'

const PokemonList = () => {
  const { pokemon, loading, fetchMore } = usePokemon();
  const [searchText, setSearchText] = useState('')
  const { background, text } = useContext(ThemeContext);

  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchText.toLowerCase())
  );


  const renderPokemonCard = useCallback(
    ({ item }) => <PokemonCard pokemon={item} />,
    []
  );

  const ListFooterComponent = useCallback(() => {
    return loading ? <Text style={[tw`text-center my-3`, { color: text }]}>Loading more...</Text> : null;
  }, [loading]);

  if (loading && pokemon.length === 0) {
    return (
      <View style={[tw`flex flex-1 items-center justify-center`, { backgroundColor: background }]}>
        <Text style={{color: text}}>Loading...</Text>
      </View>
    );
  }

  

  return (
    <View style={[tw`flex-1 p-4 bg-white`, {backgroundColor: background}]}>
        <SearchInput value={searchText} onChangeText={setSearchText}/>
        {filteredPokemon.length === 0 && !loading && (
          <NotFound/>
        )}
        <FlatList
        data={filteredPokemon}
        renderItem={renderPokemonCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={[tw`p-2`, { backgroundColor: background }]}
        onEndReached={filteredPokemon.length > 0 ? fetchMore : null}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFooterComponent}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};


export default PokemonList;