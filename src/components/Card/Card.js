import React from 'react';
import Grid from '@mui/material/Grid';
import './Card.css';

const Card = (pokeMon) => {
  // console.log('pokeMon', pokeMon);
  const { images, attacks, abilities, hp, name } = pokeMon;
  return (
    <>
      <Grid item>
        <div className="card">
          <div className="img_container">
            <img className="card_img" src={images.small} alt="" />
          </div>
          <div className="pokemon_info">
            <div className="name_wrapper">
              <h2>{name}</h2>
              <h2>HP:{hp}</h2>
            </div>
            <h4>Attacks:</h4>
            {attacks.map((item) => {
              return <span>{`${item.name},`}</span>;
            })}

            <h4>Abilities:</h4>
            {abilities ? (
              <p>
                {abilities.map((item) => {
                  return <span>{`${item.name}`}</span>;
                })}
              </p>
            ) : (
              <p>N/A</p>
            )}
          </div>
        </div>
      </Grid>
    </>
  );
};

export default Card;
