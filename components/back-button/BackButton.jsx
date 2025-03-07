import { TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import useThemeStore from '../../stores/theme/use-theme.store';

const BackButton = ({ onPress }) => {
  const { text } = useThemeStore((state) => state.theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="left" size={32} color={text} />
    </TouchableOpacity>
  );
};

export default BackButton;
