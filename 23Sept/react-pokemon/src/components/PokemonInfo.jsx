import React, { useContext } from 'react';
import PokemonContext from '../contexts/PokemonContext';

function PokemonInfo() {

    const { selectedPokemon } = useContext(PokemonContext);
    console.log('selectedPokemon', selectedPokemon)

    return selectedPokemon ? (
        <div>
            <h2>{selectedPokemon.name.english}</h2>
            <table>
                <tbody>
                    {Object.keys(selectedPokemon.base).map((key) => (
                        <tr key={key} >
                            <td> {key} </td>
                            <td> {selectedPokemon.base[key]} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : null
}

export default PokemonInfo;