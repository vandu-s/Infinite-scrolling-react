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
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=10`)
        .then((res) => {
          setItems(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [page]);
  // const fetchData = async () => {
  //   let newData = [];
  //   await axios
  //     .get(`https://api.pokemontcg.io/v2/cards?${page}=2&pageSize=10`)
  //     .then((res) => {
  //       newData = [...res.data.data];
  //       console.log('newData', newData);
  //       setItems([...items, ...newData]);
  //       setPage(page + 1);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const scrollToEnd = () => {
    setPage(page + 1);
    window.scrollTo(0, 50);
  };
  window.onscroll = function () {
    //check if the page has scrolled to the bottom
    if (
      // (window.innerHeight + window.scrollY) >= (document.body.scrollHeight)
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      // alert("you're at the bottom of the page");

      scrollToEnd();
    }
  };

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
