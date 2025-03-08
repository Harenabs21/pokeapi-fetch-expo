import { ActivityIndicator, ScrollView, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import PokemonDetails from '../components/pokemon-details/PokemonDetails';
import BackButton from '../components/back-button/BackButton';
import useThemeStore from '../stores/theme/use-theme.store';

const DetailScreen = () => {
  const { pokemonId } = useLocalSearchParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const { background } = useThemeStore((state) => state.theme);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [pokemonId]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={{ flex: 1 }} />;
  }

  if (!pokemon) {
    return <Text>Erreur lors du chargement des données</Text>;
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16, backgroundColor: background, flex: 1 }}>
      <BackButton onPress={navigation.goBack} />
      <PokemonDetails pokemon={pokemon} />
    </ScrollView>
  );
};

export default DetailScreen;
