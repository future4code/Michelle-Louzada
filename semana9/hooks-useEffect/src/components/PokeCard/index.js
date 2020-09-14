import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function PokeCard(props) {
  const [pokemonDois, setPokemonDois] = useState({});

  

  useEffect(() => {
    pegaPokemon(props.pokemon);
  }, [props.pokemon])
  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        
        setPokemonDois(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <p>{pokemonDois.name}</p>
      <p>{pokemonDois.weight} Kg</p>
      {pokemonDois.types && <p>{pokemonDois.types[0].type.name}</p>}
      {pokemonDois.sprites && (
        <img src={pokemonDois.sprites.front_default} alt={pokemonDois.name} />
      )}
    </div>
  );
}

export default PokeCard;
