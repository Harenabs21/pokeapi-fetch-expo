import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import getColorFromType from '../../colors/pokemon-color-type';
import useThemeStore from '../../stores/theme/use-theme.store';

const PokemonDetails = ({ pokemon }) => {
  const type = pokemon.types[0]?.type?.name;
  const backgroundColorFromType = getColorFromType(type);
  const { text } = useThemeStore((state) => state.theme);
  return (
    <View style={tw`flex flex-col items-center `}>
      <Text style={[tw`font-bold text-center text-lg`, { color: text }]}>{pokemon.name.toUpperCase()}</Text>
      <Text style={[tw`mb-5`, { color: text }]}>{String(pokemon.id).padStart(3, '0')}</Text>
      <View style={[tw`w-60 h-70 p-5 rounded-lg `, { backgroundColor: backgroundColorFromType }]}>
        <Image
          source={{ uri: pokemon.sprites.other.showdown.front_default }}
          style={[tw`w-full h-full `, { alignSelf: 'center', marginBottom: 16 }]}
          resizeMode="contain"
        />
      </View>
      <View style={tw`mx-5 my-5`}>
        <Text style={[tw`font-bold  text-lg`, { color: text }]}>About</Text>
        <Text style={{ fontSize: 16, marginBottom: 4, color: text }}>Species: {pokemon.species.name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 4, color: text }}>Weight: {pokemon.weight} kg</Text>
        <Text style={{ fontSize: 16, marginBottom: 4, color: text }}>Height: {pokemon.height} m</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: text }}>Types: </Text>
          {pokemon.types.map((typeInfo) => (
            <Text
              key={typeInfo.type.name}
              style={{
                backgroundColor: getColorFromType(typeInfo.type.name),
                marginRight: 8,
                marginBottom: 8,
                padding: 4,
                borderRadius: 4,
                color: '#fff',
              }}
            >
              {typeInfo.type.name.toUpperCase()}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PokemonDetails;
