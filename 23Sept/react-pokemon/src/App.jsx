import React, { useEffect, useState } from 'react';
import './App.css'
import PokemonContext from './contexts/PokemonContext';
import styled from '@emotion/styled';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';
import PokemonInfo from './components/PokemonInfo';

const Title = styled.h1`
    text-align: center;
  `;

const PageContainer = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1em;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-column-gap: 1rem;
`;

function App() {

  const [pokemon, pokemonSet] = useState(null);
  const [selectedPokemon, selectedPokemonSet] = useState(null);
  const [filter, filterSet] = useState('');

  // console.log('selectedPokemon', selectedPokemon)
  console.log('filter', filter)

  useEffect(() => {
    fetchData('/db.json')
  }, [])


  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const { pokemon } = await response.json();
      // console.log(data)
      pokemonSet(pokemon);
    } catch (error) {
      console.error('Error fetching data', error)
    }

  }

  if (!pokemon) {
    return <h1>Loading...</h1>
  }

  return (
    <PokemonContext.Provider value={{ pokemon, pokemonSet, selectedPokemon, selectedPokemonSet, filter, filterSet }}>
      <PageContainer>
        <Title>Pokemon Search</Title>
        <TwoColumnLayout>
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </TwoColumnLayout>

      </PageContainer>
    </PokemonContext.Provider>
  )
}

export default App