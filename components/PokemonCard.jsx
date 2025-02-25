import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const PokemonCard = React.memo(({ pokemon }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: pokemon.image}} style={styles.image}/>
      </View>
      <Text style={styles.name}>{pokemon.name}</Text>
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