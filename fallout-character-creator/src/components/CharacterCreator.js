import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Grid, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCharacter({
            ...character,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
        savedCharacters.push(character);
        localStorage.setItem('characters', JSON.stringify(savedCharacters));
        console.log(character);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom color="secondary">
                Create Your Fallout Character
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
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Gender"
                            name="gender"
                            select
                            value={character.gender}
                            onChange={handleChange}
                            fullWidth
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
                                inputProps={{ min: 1, max: 10 }}
                                value={character[stat]}
                                onChange={handleChange}
                                fullWidth
                            />
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit">
                            Create Character
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/"
                            style={{ marginLeft: '10px' }}
                        >
                            Back to Home
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/characters"
                            style={{ marginLeft: '10px' }}
                        >
                            View Characters
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default CharacterCreator;
