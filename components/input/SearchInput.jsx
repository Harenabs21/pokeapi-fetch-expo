import { View, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'
import useThemeStore from '../../stores/theme/use-theme.store'
const SearchInput = ({value, onChangeText}) => {

  const { background, text, borderColor } = useThemeStore((state) => state.theme);

  return (
    <View style={[tw`flex-row items-center border rounded-md p-2 mb-4 mr-4`, {backgroundColor: background, borderColor: borderColor}]}>
      <FontAwesome name="search" size={20} color={text} style={tw`mr-2`} />  
      <TextInput
        style={tw`flex-1`}
        placeholder="Search Pokémon..."
        value={value}
        onChangeText={onChangeText}
        />
    </View>
  )
}

export default SearchInput