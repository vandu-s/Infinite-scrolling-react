import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Card from './components/Card/Card';
import Grid from '@mui/material/Grid';
// import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    await axios
      .get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`)
      .then((res) => {
        setItems((oldPokemon) => [...oldPokemon, ...res.data.data]);
      })
      .catch((err) => {
        console.log(err);
      });
    setPage(page + 1);
  };
  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollTop
    ) {
      getData();
    }
  };
  useEffect(() => {
    getData();
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Container fixed>
        <Grid container spacing={4}>
          {items.map((pokeMon) => {
            return <Card key={pokeMon.id} {...pokeMon} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
