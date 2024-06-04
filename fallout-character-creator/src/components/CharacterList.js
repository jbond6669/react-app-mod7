import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container, Grid } from '@mui/material';
import { CharacterContext } from '../CharacterContext';
import backgroundImage from './images/vault-boy.jpg'; // Import your background image

function getRandomStatus(character) {
  const randomNum = Math.random();
  if (character.luck === 10 || character.intelligence === 10) {
    return randomNum > 0.5 ? 'Accepted!' : 'Denied!';
  }
  return randomNum > 0.5 ? 'Accepted!' : 'Denied!';
}

function CharacterList() {
  const { characters } = useContext(CharacterContext);

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    padding: '20px', // Add padding for better readability
    minHeight: '100vh', // Set minimum height to fill viewport
    margin: 0, // Remove any default margin
    overflowX: 'hidden', // Hide horizontal overflow
  };

  return (
    <Container style={containerStyle}>
      <Typography variant="h4" component="h1" gutterBottom>
        Applicant's Status 
      </Typography>
      <Grid container spacing={3}>
        {characters.map((character, index) => (
          <Grid item xs={12} key={index} style={{ marginBottom: '10px' }}>
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
            <Typography>Status: {getRandomStatus(character)}</Typography>
          </Grid>
        ))}
      </Grid>
      <div style={{ marginTop: '20px' }}>
        <Button 
          variant="contained" 
          component={Link} 
          to="/" 
          style={{ 
            backgroundColor: 'blue', 
            color: 'white', 
            marginRight: '10px' 
          }}
        >
          Back to Home
        </Button>
        <Button 
          variant="contained" 
          component={Link} 
          to="/create" 
          style={{ 
            backgroundColor: 'blue', 
            color: 'white' 
          }}
        >
          Apply Now!
        </Button>
      </div>
    </Container>
  );
}

export default CharacterList;
