import { View, TextInput } from 'react-native'
import React, {useContext} from 'react'
import tw from 'twrnc'
import { FontAwesome } from '@expo/vector-icons'
import { ThemeContext } from '../../context/theme/ThemeContext'
const SearchInput = ({value, onChangeText}) => {

  const { background, text, borderColor } = useContext(ThemeContext);

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