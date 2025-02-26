import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/theme/ThemeContext'

const PokemonCard = React.memo(({ pokemon }) => {
  const theme = useContext(ThemeContext)

  return (
    <TouchableOpacity style={[styles.card, {backgroundColor: theme.background}, {borderColor: theme.borderColor}]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: pokemon.image}} style={styles.image}/>
      </View>
      <Text style={[styles.name , {color: theme.text}]}>{pokemon.name}</Text>
    </TouchableOpacity>
  )
})

export default PokemonCard

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  imageContainer: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
})