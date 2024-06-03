import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types'; // PropTypes for type checking
import { TextField, Button, Typography, Container, Grid, MenuItem } from '@mui/material'; // Material UI components
import { Link, useNavigate } from 'react-router-dom'; // Link component from React Router
import { CharacterContext } from '../CharacterContext'; // Import CharacterContext
import backgroundImage from './images/pip-boy.jpg'; // Import background image

function CharacterCreator() {
  const [character, setCharacter] = useState({
    name: '',
    age: '',
    gender: '',
    strength: 1,
    perception: 1,
    endurance: 1,
    charisma: 1,
    intelligence: 1,
    agility: 1,
    luck: 1,
  });

  const { addCharacter } = useContext(CharacterContext); // Use context to add character
  const navigate = useNavigate(); // Use navigate to redirect after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter({
      ...character,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCharacter(character);
    navigate('/characters'); // Redirect to character list page
  };

  const handleRandomize = () => {
    const randomStat = () => Math.floor(Math.random() * 10) + 1;
    setCharacter({
      ...character,
      strength: randomStat(),
      perception: randomStat(),
      endurance: randomStat(),
      charisma: randomStat(),
      intelligence: randomStat(),
      agility: randomStat(),
      luck: randomStat(),
    });
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" component="h1" gutterBottom style={{ color: 'white' }}>
          Vault Tec Application
        </Typography>
        <Typography variant="p" component="p" gutterBottom style={{ color: 'white' }}>
          Enter What Makes You S.P.E.C.I.A.L below
        </Typography>
        <Typography variant="p" component="p" gutterBottom style={{ color: 'white' }}>
          If You Do Not Know Your S.P.E.C.I.A.L click "CALCULATE" and Vault Tec Will Do The Rest 
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={character.name}
                onChange={handleChange}
                fullWidth
                required
                inputProps={{ style: { color: 'white' } }} // White text color
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Age"
                name="age"
                type="number"
                value={character.age}
                onChange={handleChange}
                fullWidth
                required
                inputProps={{ style: { color: 'white' } }} // White text color
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="Gender"
                name="gender"
                value={character.gender}
                onChange={handleChange}
                fullWidth
                required
                inputProps={{ style: { color: 'white' } }} // White text color
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            {['strength', 'perception', 'endurance', 'charisma', 'intelligence', 'agility', 'luck'].map((stat) => (
              <Grid item xs={12} sm={6} md={4} key={stat}>
                <TextField
                  label={stat.charAt(0).toUpperCase() + stat.slice(1)}
                  name={stat}
                  type="number"
                  value={character[stat]}
                  onChange={handleChange}
                  fullWidth
                  required
                  inputProps={{ min: 1, max: 10, style: { color: 'white' } }} // White text color
                />
              </Grid>
            ))}
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
                Apply
              </Button>
              <Button variant="contained" onClick={handleRandomize} style={{ backgroundColor: 'blue', color: 'white', marginLeft: '10px' }}>
                Calculate my S.P.E.C.I.A.L
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component={Link} to="/" style={{ backgroundColor: 'blue', color: 'white' }}>
                Back to Home
              </Button>
              <Button variant="contained" component={Link} to="/characters" style={{ backgroundColor: 'blue', color: 'white', marginLeft: '10px' }}>
                List of Vault Dwellers
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

// PropTypes for type checking
CharacterCreator.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    strength: PropTypes.number.isRequired,
    perception: PropTypes.number.isRequired,
    endurance: PropTypes.number.isRequired,
    charisma: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
    agility: PropTypes.number.isRequired,
    luck: PropTypes.number.isRequired,
  }),
};

export default CharacterCreator;
