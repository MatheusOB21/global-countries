import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { Box } from './styles/Box'
import { Container } from './styles/Container'
import { Table, TableHead, TableCell, TableRow, TableBody } from './styles/table'

export default function  CountryList() {
  const [countries, setCountries] = useState();
  const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/graphql',
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    client
    .query({
      query: gql`
        query {
          countries {
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
    .then((result) => setCountries(result.data.countries));
  }, []);

  if(!countries){
    return(
      <div>
        <h2>Carregando....</h2>
      </div>
    )
  }else{
    // debugger
  }

  return (
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
                <TableCell>{country.capital}</TableCell>
                <TableCell>{country.languages.map((language) => (language.name)).join(' | ')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Box>
      </Container>
    </div>
  );
}

