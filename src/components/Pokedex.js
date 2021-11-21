import React, { useEffect, useState } from 'react';

import Cards from './Cards';
import dbPokemon from '../assets/dbPokemon.json'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonsRecherche, setPokemonsRecherche] = useState('')

    const recherche = (e) => {
        
        setPokemonsRecherche(e.target.value)
    }
    
    useEffect(() => {
        setPokemons(dbPokemon.pokemon)

        
    }, [pokemons])


    return (
        <div className="pokedex">
            <h1>Pokédex</h1>
            <input type="text" autoComplete="off" onChange={recherche}/>
            <ul className="pokemon-list">
                {pokemons
                .filter(pokemon => pokemon.name.toLowerCase().includes(pokemonsRecherche.toLowerCase()))
                .map(pokemon => (
                    <Cards nom={pokemon.name} img={pokemon.img} type={pokemon.type} key={pokemon.id} />
                ))}
            </ul>
        </div>
    );
};

export default Pokedex;
