
import { TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ThemeContext } from '../../context/theme/ThemeContext'
import tw from 'twrnc'

const ListAndGridIcons = ({onPress, icon}) => {
  const {text, background} = useContext(ThemeContext)  
  return (
    <TouchableOpacity style={[{ backgroundColor: background }, tw`mb-4  rounded-md`]} onPress={onPress}>
      <Ionicons name={icon} size={32} color={text}/>
    </TouchableOpacity>
  )
}

export default ListAndGridIcons