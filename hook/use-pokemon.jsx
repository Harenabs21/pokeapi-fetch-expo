import { useState, useEffect } from 'react';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');

  const extractIdFromUrl = (url) => {
    const segments = url.split('/');
    return segments[segments.length - 2];
  };

  const fetchData = async () => {
    try {
      if (!nextUrl) return;
      setLoading(true);
      const response = await fetch(nextUrl);
      const data = await response.json();
      const details = await Promise.all(
        data.results.map(async (poke) => {
          const detailResponse = await fetch(poke.url);
          const detailData = await detailResponse.json();
          return { ...poke, id: extractIdFromUrl(poke.url), image: detailData.sprites.other.showdown.front_default };
        })
      );
      setPokemon((prev) => {
        const uniquePokemons = details.filter(
          (newPoke) => !prev.some((existingPoke) => existingPoke.id === newPoke.id)
        );
        return [...prev, ...uniquePokemons];
      });
      setNextUrl(data.next);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { pokemon, loading, fetchMore: fetchData };
};

export default usePokemon;
