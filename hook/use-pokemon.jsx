import { useState, useEffect } from 'react';

const usePokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
      const data = await response.json();
      const details = await Promise.all(data.results.map(async (poke) => {
        const detailResponse = await fetch(poke.url);
        const detailData = await detailResponse.json();
        return { ...poke, image: detailData.sprites.other.showdown.front_default };
      }));
      setPokemon(details);
      setLoading(false)
    };

    fetchData();
  }, []);

  return { pokemon, loading };
}

export default usePokemon;