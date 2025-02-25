import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function PokemonCard({ pokemon }) {
  return (
    //TODO: fix the image that doesn't render
    <TouchableOpacity style={styles.card}>
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