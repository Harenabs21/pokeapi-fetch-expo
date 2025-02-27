import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ThemeContext } from '../../context/theme/ThemeContext';
import tw from 'twrnc';

const NotFound = () => {
  const { background, text } = useContext(ThemeContext);

  return (
    <View style={[tw`flex-1 items-center justify-center`, { backgroundColor: background }]}>
      <FontAwesome name="exclamation-circle" size={50} color={text} style={tw`mb-2`} />
      <Text style={[tw`text-lg`, { color: text }]}>No Pokemon found</Text>
    </View>
  );
};

export default NotFound;
