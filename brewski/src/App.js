import React from 'react';
import Breweries from './components/Breweries'
import Search from './components/Search'
import { Container, CssBaseline } from '@material-ui/core'
import './App.css';

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Search />
        <Breweries />
      </Container>
    </>
  );
}

export default App;
