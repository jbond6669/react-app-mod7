import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Link component from React Router
import { Button, Typography, Container, Grid } from '@mui/material'; // Material UI components
import { CharacterContext } from '../CharacterContext'; // Import CharacterContext

function CharacterList() {
  const { characters } = useContext(CharacterContext); // Use context to get characters

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        List of Created Characters
      </Typography>
      <Grid container spacing={3}>
        {characters.map((character, index) => (
          <Grid item xs={12} key={index}>
            <Typography>Name: {character.name}</Typography>
            <Typography>Age: {character.age}</Typography>
            <Typography>Gender: {character.gender}</Typography>
            <Typography>Strength: {character.strength}</Typography>
            <Typography>Perception: {character.perception}</Typography>
            <Typography>Endurance: {character.endurance}</Typography>
            <Typography>Charisma: {character.charisma}</Typography>
            <Typography>Intelligence: {character.intelligence}</Typography>
            <Typography>Agility: {character.agility}</Typography>
            <Typography>Luck: {character.luck}</Typography>
            <hr />
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" component={Link} to="/" style={{ backgroundColor: 'blue', color: 'white' }}>
        Back to Home
      </Button>
      <Button variant="contained" component={Link} to="/create" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '10px' }}>
        Create Another Character
      </Button>
    </Container>
  );
}

export default CharacterList;
