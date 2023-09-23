import React, { useContext } from 'react'
import PokemonContext from '../contexts/PokemonContext';
import PokemonRow from './PokemonRow';

function PokemonTable() {

    const { filter, pokemon, selectedPokemonSet } = useContext(PokemonContext);

    // console.log(pokemon)

    'bulBAsaur' == 'Bulbasaur'

    return (
        <table width='100%'>
            <tbody>
                {
                    pokemon.filter(({ name: { english } }) =>
                        english.toLowerCase().includes(filter.toLowerCase())
                    )?.slice(0, 20).map((pokemon) => (
                        <PokemonRow
                            key={pokemon.id}
                            pokemon={pokemon}
                            onClick={(pokemon) => selectedPokemonSet(pokemon)}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default PokemonTable