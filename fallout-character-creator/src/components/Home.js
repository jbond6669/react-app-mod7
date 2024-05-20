// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function Home() {
    return (
        <div>
            <Typography variant="h1" color="primary">
                You are S.P.E.C.I.A.L!!
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/create">
                Create a Character
            </Button>
            <Button variant="contained" color="secondary" component={Link} to="/characters" style={{ marginLeft: '10px' }}>
                View Characters
            </Button>
        </div>
    );
}

export default Home;
