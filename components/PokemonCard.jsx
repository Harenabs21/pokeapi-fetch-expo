import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function PokemonCard({ pokemon }) {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={{uri: pokemon.image}} style={styles.image}/>
      </View>
      <Text style={styles.name}>{pokemon.name}</Text>
    </TouchableOpacity>
  )
}

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
    width: 50,
    height: 50,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})