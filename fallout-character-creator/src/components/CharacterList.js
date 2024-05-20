import React, { useState, useEffect } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function CharacterList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const savedCharacters = JSON.parse(localStorage.getItem('characters')) || [];
        setCharacters(savedCharacters);
    }, []);

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom color="secondary">
                Saved Characters
            </Typography>
            <List>
                {characters.map((character, index) => (
                    <ListItem key={index}>
                        <ListItemText
                            primary={`${character.name} (Age: ${character.age}, Gender: ${character.gender})`}
                            secondary={`S: ${character.strength}, P: ${character.perception}, E: ${character.endurance}, C: ${character.charisma}, I: ${character.intelligence}, A: ${character.agility}, L: ${character.luck}`}
                        />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="secondary" component={Link} to="/">
                Back to Home
            </Button>
        </Container>
    );
}

export default CharacterList;
