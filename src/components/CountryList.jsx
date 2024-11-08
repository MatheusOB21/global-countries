import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { Box } from './styles/Box';
import { Container } from './styles/Container';
import { Table, TableHead, TableCell, TableRow, TableBody } from './styles/table';
import { Input } from './styles/Input';
import Loading from './Loading';

export default function CountryList() {
  const [countries, setCountries] = useState();
  const [NameQuery, setNameQuery] = useState('');
  const [capitalQuery, setCapitalQuery] = useState('');

  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    setCountries(null)
    client
      .query({
        query: gql`
        query {
          countries(filter: { name: { regex: "^${capitalize(NameQuery)}" } }) {
            emoji
            name
            capital
            languages {
              name
            }
          }
        }
      `,
      })
      .then((result) => filterCountriesByCapital(result.data.countries));
  }, [NameQuery, capitalQuery]);

  function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  function filterCountriesByCapital(countriesCollection) {
    if (capitalQuery) {
      let filteredCountries = countriesCollection.filter(country => String(country.capital).toLowerCase().includes(capitalQuery.toLowerCase()))

      setCountries(filteredCountries)
    } else {
      setCountries(countriesCollection)
    }
  }

  return (
    <>
      <Container $justifyContent='center' $gap='1rem'>
        <Input type="text" id="filter-name" placeholder="Nome do país" onChange={(event) => setNameQuery(event.currentTarget.value)} />
        <Input type="text" id="filter-capital" placeholder="Capital do país" onChange={(event) => setCapitalQuery(event.currentTarget.value)} />
      </Container>
      {!countries ? <Loading text={'Carregando lista de paises...'} /> : (
        <div id='country-list'>
          <Container>
            <Box>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell $textAlign='center'>Bandeira</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Capital</TableCell>
                    <TableCell>Idiomas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {countries.map((country) => (
                    <TableRow>
                      <TableCell $textAlign='center' $sx='font-size: 1.5rem'>{country.emoji}</TableCell>
                      <TableCell>{country.name}</TableCell>
                      <TableCell>{country.capital || 'Não possui capital'}</TableCell>
                      <TableCell>{country.languages.map((language) => (language.name)).join(' | ') || 'Não possui idioma'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Container>
        </div>)}
    </>)
}

