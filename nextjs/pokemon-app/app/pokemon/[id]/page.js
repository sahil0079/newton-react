'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Details.module.css'

function Details({ params: { id } }) {

    const [pokemon, setPokemon] = useState(null);
    //fetch the data based on id
    const URL = `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`



    useEffect(() => {
        async function getPokemon() {
            const response = await fetch(URL);
            setPokemon(await response.json());
        };
        if (id) {
            getPokemon();
        }
    }, [id])

    console.log(pokemon)

    if (!pokemon) {
        return null
    }
    return (
        <div>
            <h2>Pokemon Details</h2>
            <Link href='/'>
                Back to Home
            </Link>

            <div className={styles.layout}>
                <div>
                    <img className={styles.picture}
                        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                        alt={pokemon.name}

                    />
                </div>
                <div>
                    <div className={styles.name}>{pokemon.name}</div>
                    <div className={styles.type}>{pokemon.type.join(", ")} </div>
                    <table>
                        <thead className={styles.header}>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats.map(({ name, value }) => (
                                <tr key={name} >
                                    <td className={styles.attribute}>{name}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Details