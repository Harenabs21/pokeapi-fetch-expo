import { TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import useThemeStore from '../../stores/theme/use-theme.store';
import tw from 'twrnc';

const ListAndGridIcons = ({ onPress, icon }) => {
  const { text, background } = useThemeStore((state) => state.theme);
  return (
    <TouchableOpacity style={[{ backgroundColor: background }, tw`mb-4  rounded-md`]} onPress={onPress}>
      <Ionicons name={icon} size={32} color={text} />
    </TouchableOpacity>
  );
};

export default ListAndGridIcons;
