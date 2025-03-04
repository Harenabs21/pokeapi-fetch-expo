import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import useThemeStore from '../../stores/theme/use-theme.store'

const PokemonCard = React.memo(({ pokemon, isGridView }) => {
  const { background, text, borderColor } = useThemeStore((state) => state.theme) ;

  return (
    <TouchableOpacity style={[tw`${ isGridView ? 'flex-col items-center p-2 border rounded-md mb-4 w-40 shadow-sm' : 'flex-row items-center p-2 border rounded-md mb-2'}`, {backgroundColor: background}, {borderColor: borderColor}]}>
      <View style={tw`${isGridView ? 'mb-2 w-full h-32' : 'w-18 h-18 mr-2'}`}>
        <Image source={{uri: pokemon.image}} style={[tw`w-full h-full rounded-lg`, {resizeMode: 'contain'}]}/>
      </View>
      <Text style={[tw`${isGridView ? 'text-center text-lg font-bold' : 'text-lg font-bold'}` , {color: text}]}>{pokemon.name}</Text>
    </TouchableOpacity>
  )
})

export default PokemonCard