import { FlatList, View, Text, useWindowDimensions } from 'react-native';
import usePokemon from '../../hook/use-pokemon';
import PokemonCard from './PokemonCard';
import SearchInput from '../input/SearchInput';
import NotFound from '../not-found/NotFound';
import React, { useCallback, useContext, useState } from 'react';
import { ThemeContext } from '../../context/theme/ThemeContext';
import tw from 'twrnc'
import ListAndGridIcons from '../grid-icons/ListAndGridIcons';

const PokemonList = () => {
  const { pokemon, loading, fetchMore } = usePokemon();
  const [searchText, setSearchText] = useState('')
  const { background, text } = useContext(ThemeContext);
  const [isGridView, setIsGridView] = useState(false);
  const { width, height } = useWindowDimensions();
  const isPortrait = height > width;
  const numColumns = isGridView ? (isPortrait ? 2 : 4) : 1;


  const filteredPokemon = pokemon.filter((poke) =>
    poke.name.toLowerCase().includes(searchText.toLowerCase())
  );


  const renderPokemonCard = useCallback(
    ({ item }) => <PokemonCard pokemon={item} isGridView={isGridView} />,
    [isGridView]
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
        <View style={tw`p-4 flex-row items-center mr-4`}>
          <SearchInput value={searchText} onChangeText={setSearchText}/>
          <ListAndGridIcons icon={isGridView ? 'grid' : 'list'} onPress={() => setIsGridView((prev) => !prev)}/>
        </View>  
        {filteredPokemon.length === 0 && !loading && (
          <NotFound/>
        )}
        <FlatList
        data={filteredPokemon}
        renderItem={renderPokemonCard}
        key={`${isGridView ? 'grid' : 'list'}-${numColumns}`}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        columnWrapperStyle={isGridView && tw`justify-between`}
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