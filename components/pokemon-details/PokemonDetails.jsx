import { View, Text, Image } from 'react-native';
import React from 'react';

const PokemonDetails = ({ pokemon }) => {
  return (
    <View>
      <Image
        source={{ uri: pokemon.sprites.other.showdown.front_default }}
        style={{ width: 200, height: 200, alignSelf: 'center', marginBottom: 16 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 }}>
        {pokemon.name.toUpperCase()}
      </Text>
      <Text style={{ fontSize: 16, marginBottom: 4 }}>Species: {pokemon.species.name}</Text>
      <Text style={{ fontSize: 16, marginBottom: 4 }}>Weight: {pokemon.weight} kg</Text>
      <Text style={{ fontSize: 16, marginBottom: 4 }}>Height: {pokemon.height} m</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>Types:</Text>
        {pokemon.types.map((typeInfo) => (
          <Text
            key={typeInfo.type.name}
            style={{
              backgroundColor: '#eee',
              marginRight: 8,
              marginBottom: 8,
              padding: 4,
              borderRadius: 4,
            }}
          >
            {typeInfo.type.name.toUpperCase()}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PokemonDetails;
