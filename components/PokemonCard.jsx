import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'
import tw from 'twrnc'

const PokemonCard = React.memo(({ pokemon }) => {
  const theme = useContext(ThemeContext)

  return (
    <TouchableOpacity style={[tw`flex-row items-center p-2 border border-gray-300 rounded-md mb-2 `, {backgroundColor: theme.background}, {borderColor: theme.borderColor}]}>
      <View style={tw`w-18 h-18 mr-2`}>
        <Image source={{uri: pokemon.image}} style={[tw`w-full h-full rounded-md`, {resizeMode: 'contain'}]}/>
      </View>
      <Text style={[tw`text-lg font-bold` , {color: theme.text}]}>{pokemon.name}</Text>
    </TouchableOpacity>
  )
})

export default PokemonCard