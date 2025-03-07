import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import useThemeStore from '../../stores/theme/use-theme.store';
import getColorFromType from '../../colors/pokemon-color-type';

const PokemonCard = React.memo(({ pokemon, isGridView }) => {
  const { text, borderColor } = useThemeStore((state) => state.theme);
  const { id, name, image, types } = pokemon;
  const backgroundFromType = getColorFromType(types[0]);

  return (
    <TouchableOpacity
      style={[
        tw`${isGridView ? 'flex-col items-center p-2 border rounded-md mb-4 w-40 shadow-sm' : 'flex-row items-center p-2 border rounded-md mb-2'}`,
        { backgroundColor: backgroundFromType },
        { borderColor: borderColor },
      ]}
    >
      <View style={tw`${isGridView ? 'mb-2 w-full h-32' : 'w-18 h-18 mr-2'}`}>
        <Image source={{ uri: image }} style={[tw`w-full h-full rounded-lg`, { resizeMode: 'contain' }]} />
      </View>
      <View>
        <Text style={[tw`${isGridView ? 'text-center text-lg font-thin' : 'text-lg font-thin'}`, { color: text }]}>
          {String(id).padStart(3, '0')}
        </Text>
        <Text style={[tw`${isGridView ? 'text-center text-lg font-bold' : 'text-lg font-bold'}`, { color: text }]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default PokemonCard;
