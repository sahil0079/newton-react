"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react'
import styles from './styles/Home.module.css';

const URL = 'https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json';


export default function Home() {

  const [pokemon, setPokemon] = useState();


  useEffect(() => {
    async function getPokemons() {

      const response = await fetch(URL);
      const data = await response.json();
      // setPokemon(await response.json());
      setPokemon(data);
    }

    getPokemons();
  }, [])

  // console.log(pokemon)

  return (
    <main className={styles.container}>

      <h2>Pokemon List</h2>

      <div className={styles.grid} >
        {pokemon?.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>

            <Link href={`/pokemon/${pokemon.id}`} >
              <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name} />
              <h3>{pokemon.name}</h3>

            </Link>

          </div>
        ))}
      </div>
    </main>
  )
}
